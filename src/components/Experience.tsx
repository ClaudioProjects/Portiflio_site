import React, { useState } from 'react'
import genericStyles from '@/styles/SectionGeneric.module.scss'
import styles from '@/styles/Experience.module.scss'
import { FaCode } from 'react-icons/fa'
import jsonData from '@/static/experience.json'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwipeIndicator from './common/SwipeIndicator'
import TypeWriterEffect from './common/TypeWriterEffect'

interface Expirence {
  name: string
  iconPath: string
  description: string
  use: string
  useType: number
}

export default function Experience() {
  const [chosenExperience, setChosenExperience] = useState<Expirence | null>(
    null,
  )
  const experiences: Expirence[] = jsonData

  return (
    <section id="experience" className={genericStyles.boxSection}>
      <div className={genericStyles.contentBox}>
        <h2
          className={`${genericStyles.titleSection} scrolledObserver animate__animated`}
        >
          Conhecimentos
        </h2>
        <p
          className={`${genericStyles.descriptionSection} scrolledObserver animate__animated`}
        >
          Nesta seção, você encontrará um resumo das minhas habilidades no campo
          do desenvolvimento, contendo linguagens de programação, tecnologias e
          frameworks.
        </p>

        <div className={styles.box}>
          <div
            className={`${styles.experienceItemBox} scrolledObserver animate__animated`}
          >
            <Swiper
              breakpoints={{
                0: { slidesPerView: 3 },
                769: { slidesPerView: 11 },
              }}
            >
              {experiences.map((experience, index) => (
                <SwiperSlide key={index}>
                  <button
                    onClick={() => setChosenExperience(experience)}
                    className={styles.experienceItem}
                  >
                    <div
                      className={
                        experience.name === 'React'
                          ? styles.imageBoxReact
                          : styles.imageBox
                      }
                    >
                      <Image
                        alt="Icon experience"
                        src={experience.iconPath}
                        fill
                      />
                    </div>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
            <SwipeIndicator />
          </div>

          <div
            onClick={() => setChosenExperience(null)}
            className={`${
              chosenExperience ? styles.cardBoxOpen : styles.cardBox
            } scrolledObserver animate__animated`}
          >
            <div className={styles.cardBack}>
              <FaCode />
            </div>

            <div className={styles.cardFront}>
              {chosenExperience && (
                <>
                  <div
                    className={
                      chosenExperience.name === 'React'
                        ? styles.imageBoxReact
                        : styles.imageBox
                    }
                  >
                    <Image
                      src={chosenExperience.iconPath}
                      alt="chosen experience icon"
                      fill
                    />
                  </div>
                  <h4>{chosenExperience.name}</h4>
                  <div
                    className={
                      styles[`useBox_type_${chosenExperience.useType}`]
                    }
                  >
                    <span>{chosenExperience.use}</span>
                  </div>

                  <p>
                    <TypeWriterEffect
                      intervalMs={1}
                      words={[chosenExperience.description]}
                    />
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
