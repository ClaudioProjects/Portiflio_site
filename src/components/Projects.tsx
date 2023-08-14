import React, { useState, useEffect } from 'react'
import styles from '@/styles/Projects.module.scss'
import genericStyles from '@/styles/SectionGeneric.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import { Ubuntu } from 'next/font/google'
import { FaLink, FaGithub } from 'react-icons/fa'
import jsonData from '@/static/projects.json'
import SwipeIndicator from './common/SwipeIndicator'

const ubuntu = Ubuntu<any>({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
})

interface Project {
  name: string
  path: string
  link: string | null
  github: string | null
  technology: string
  description: string
}

interface Dependencie {
  loading: boolean
  error: boolean
  projects: Project[] | []
}

export default function Projects() {
  const projectsJson: Project[] = jsonData
  const [dependencies, setDependencies] = useState<Dependencie>({
    loading: true,
    error: false,
    projects: [],
  })

  useEffect(() => {
    setDependencies({
      loading: false,
      error: false,
      projects: projectsJson,
    })
  }, [])

  return (
    <section id="projects" className={genericStyles.boxSection}>
      <div className={`${genericStyles.contentBox} ${styles.projectsBox} `}>
        <h2
          className={`${genericStyles.titleSection} scrolledObserver animate__animated`}
        >
          Projetos
        </h2>
        <p
          className={`${genericStyles.descriptionSection} scrolledObserver animate__animated`}
        >
          Apresento alguns dos projetos em que tive a oportunidade de trabalhar
          ao longo da minha jornada como desenvolvedor, incluindo trabalhos
          pessoais e profissionais. Cada projeto foi uma oportunidade única de
          aplicar minhas habilidades
        </p>

        <div
          className={`${styles.projects} scrolledObserver animate__animated`}
        >
          {dependencies && !dependencies.loading && !dependencies.error && (
            <>
              <Swiper
                breakpoints={{
                  0: { slidesPerView: 1 },
                  769: { slidesPerView: 3 },
                }}
              >
                {dependencies.projects.map(
                  (
                    { name, path, link, github, description, technology },
                    index,
                  ) => (
                    <SwiperSlide key={`${name}-${index}`}>
                      <div className={styles.cardProject}>
                        <div className={styles.cardImageBox}>
                          <div className={styles.cardImage}>
                            <Image fill alt="project image" src={path} />
                          </div>
                        </div>

                        <div className={styles.cardDescription}>
                          <div className={styles.cardLinkBox}>
                            {github && (
                              <a href={github} target="blank">
                                <FaGithub />
                              </a>
                            )}
                            {link && (
                              <a href={link} target="blank">
                                <FaLink />
                              </a>
                            )}
                          </div>

                          <h3 style={ubuntu.style}>{name}</h3>
                          <p>{description}</p>
                          <span>{technology}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
              <SwipeIndicator />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
