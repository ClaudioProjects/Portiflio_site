import React from 'react'
import styles from '@/styles/Home.module.scss'
import { Ubuntu } from 'next/font/google'
import {
  FaTelegramPlane,
  FaNodeJs,
  FaDatabase,
  FaReact,
  FaCss3Alt,
  FaGitAlt,
} from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { AiFillCode } from 'react-icons/ai'
import Image from 'next/image'
import 'animate.css'

const ubuntu = Ubuntu<undefined>({
  weight: ['400', '500'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <section id="index" className={styles.MainBox}>
      <div className={styles.svgBackground}></div>

      <div
        className={`${styles.boxText} animate__animated animate__zoomInDown`}
      >
        <h1 className={`${ubuntu.className} `}>Claudio Network</h1>

        <p className={`${styles.descriptionText} `}>
          Seja bem-vindo ao meu portfólio! Sou um Programador Fullstack
          apaixonado por criar soluções tecnológicas. Ao longo do tempo, tenho
          aprimorado minhas habilidades em desenvolvimento web, tanto no
          front-end quanto no back-end, buscando sempre a excelência e a entrega
          de projetos de alta qualidade.
        </p>

        <button className={styles.buttonContactMe}>
          <div className={styles.borderItem}></div>
          <div className={styles.content}>
            <span className={ubuntu.className}>
              Vamos juntos dar vida às suas ideias?
            </span>
            <FaTelegramPlane />
          </div>
        </button>
      </div>

      <div className={styles.rightSideFirstSectionBox}>
        <div className={styles.iconsBox}>
          <FaNodeJs />
          <FaDatabase />
          <FaReact />
          <FaCss3Alt />
          <FaGitAlt />
          <SiTypescript />
          <AiFillCode />
        </div>

        <div className={styles.emphasisImageBox}>
          <div>
            <Image src={'image-first-page.svg'} fill alt="Image dev" />
          </div>
        </div>
      </div>
    </section>
  )
}
