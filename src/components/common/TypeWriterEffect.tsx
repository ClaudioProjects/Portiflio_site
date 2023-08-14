import React, { useEffect, useState } from 'react'

interface Props {
  words: Array<string>
  intervalMs: number
  isInfinite?: boolean
  fontStyle?: Object
}

export default function TypeWriterEffect(props: Props) {
  const [emphasisWord, setEmphasisWord] = useState<string>('')
  const { words, intervalMs, isInfinite, fontStyle } = props

  useEffect(() => {
    setEmphasisWord('')
    let currentIndexWord: number = 0
    const interval = setInterval(() => {
      setEmphasisWord((prev) => {
        if (prev.length === words[currentIndexWord].length) {
          if (currentIndexWord + 1 > words.length - 1) {
            if (!isInfinite) {
              clearInterval(interval)
              return prev
            }
            currentIndexWord = 0
          } else currentIndexWord += 1
          return ''
        }
        return `${prev}${words[currentIndexWord][prev.length]}`
      })
    }, intervalMs)

    return () => clearInterval(interval)
  }, [words])

  return <span style={fontStyle || {}}>{emphasisWord}</span>
}
