import React from 'react'
import '@styles/globals.scss'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'Claudio NETWORK',
  description: 'Portifolio Dev',
}
