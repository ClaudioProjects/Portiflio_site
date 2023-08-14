'use client'
import FirstPage from '@/components/Home'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import Footer from '@/components/Footer'
import { useEffect } from 'react'

export default function Home() {
  function cbIntersectionObserver(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationName: string | null = entry.target.getAttribute(
          'data-animation-name',
        )
        entry.target.classList.remove('scrolledObserver')
        entry.target.classList.add(animationName || 'animate__fadeInUp')
      }
    })
  }

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      cbIntersectionObserver,
    )
    document.querySelectorAll('.scrolledObserver').forEach((e) => {
      observer.observe(e)
    })
  })

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main>
        <Header />
        <FirstPage />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <ToastContainer
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
          bodyClassName="toastBody"
        />
      </main>
    </>
  )
}
