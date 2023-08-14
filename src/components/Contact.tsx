import React from 'react'
import styles from '@/styles/Contact.module.scss'
import genericStyles from '@/styles/SectionGeneric.module.scss'
import FormEmail from './FormEmail'
import Image from 'next/image'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { showMessage } from '@/utils/toast'

export default function Contact() {
  const handleCopyText = async () => {
    await navigator.clipboard.writeText('claudiodevcontact@gmail.com')
    showMessage({
      message: 'Email Copiado!',
      position: 'top-right',
      type: 'success',
      duration: 1500,
    })
  }

  return (
    <section id="contact" className={genericStyles.boxSectionDarkBlue}>
      <div className={genericStyles.contentBox}>
        <h2
          className={`${genericStyles.titleSection} scrolledObserver animate__animated`}
        >
          Contato
        </h2>
        <p
          className={`${genericStyles.descriptionSection} scrolledObserver animate__animated`}
        >
          Aqui é o lugar onde você pode entrar em contato comigo. Sinta-se à
          vontade para enviar uma mensagem, fazer uma pergunta ou iniciar uma
          conversa.
        </p>

        <div className={styles.contentBox}>
          <FormEmail />
          <div
            data-animation-name="animate__fadeInRight"
            className={`${styles.staticDataBox} scrolledObserver animate__animated`}
          >
            <div className={styles.imageBox}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="dotted-circle d-none d-md-block"
                viewBox="0 0 352 352"
                overflow="visible"
              >
                <circle
                  cx="176"
                  cy="176"
                  r="174"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeDasharray="12.921,11.9271"
                ></circle>
              </svg>
              <div className={styles.imageContent}>
                <Image
                  src={'/profile-pic-2.png'}
                  alt="My profile picture"
                  fill
                />
              </div>
            </div>

            <div className={styles.textBox}>
              <div className={styles.itemContent}>
                <FaLinkedin />
                <a
                  className={styles.text}
                  target="_blank"
                  href="https://www.linkedin.com/in/claudio-junior-olimpio-324308227/"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </div>
              <div className={styles.itemContent}>
                <FaGithub />
                <a
                  className={styles.text}
                  href="https://github.com/ClaudioProjects"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
              <div className={styles.itemContent}>
                <FaEnvelope />
                <span onClick={handleCopyText} className={styles.text}>
                  Email
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
