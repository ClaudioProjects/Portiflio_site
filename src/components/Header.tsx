'use client'
import React, { useEffect, useState, useCallback } from 'react'
import styles from '@/styles/Header.module.scss'
import { Rubik, Ubuntu } from 'next/font/google'
import { FiMenu } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa'
import TypeWriterEffect from './common/TypeWriterEffect'

const rubik = Rubik<undefined>({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
})
const ubuntu = Ubuntu<undefined>({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Header() {
  const [currentSection, setCurrentSection] = useState<string>('index')
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  const handleScroll = () => {
    setIsScrolled(window.scrollY !== 0)

    const sections = document.querySelectorAll<any>('section')
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      if (rect.top < 300) {
        setCurrentSection(section.id)
      }
    })
  }

  const navigateInToSection = (sectionId: string) => {
    const section = document.querySelector<any>(`#${sectionId}`)
    setMobileMenu(false)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMobileMenu = useCallback(() => {
    setMobileMenu((prev) => !prev)
  }, [mobileMenu])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={!isScrolled ? styles.headerBox : styles.headerBoxScrolled}
    >
      <h2 className={rubik.className}>
        {'<'}
        <TypeWriterEffect
          intervalMs={250}
          isInfinite
          words={['Claudio', 'Back-end', 'Front-end']}
          fontStyle={ubuntu.style}
        />
        {' />'}
      </h2>
      <div
        className={mobileMenu ? styles.boxButtonsShowMobile : styles.boxButtons}
      >
        <button
          onClick={() => navigateInToSection('index')}
          className={currentSection === 'index' ? styles.selected : ''}
        >
          <span style={ubuntu.style}>Inicio</span>
        </button>
        <button
          onClick={() => navigateInToSection('projects')}
          className={currentSection === 'projects' ? styles.selected : ''}
        >
          <span style={ubuntu.style}>Projetos</span>
        </button>
        <button
          onClick={() => navigateInToSection('experience')}
          className={currentSection === 'experience' ? styles.selected : ''}
        >
          <span style={ubuntu.style}>Conhecimentos</span>
        </button>
        <button
          onClick={() => navigateInToSection('contact')}
          className={currentSection === 'contact' ? styles.selected : ''}
        >
          <span style={ubuntu.style}>Contato</span>
        </button>

        <button onClick={handleMobileMenu} className={styles.closeMobileMenu}>
          <FaPlus />
        </button>
      </div>
      <button onClick={handleMobileMenu} className={styles.menuButtonMobile}>
        <FiMenu />
      </button>
    </header>
  )
}
