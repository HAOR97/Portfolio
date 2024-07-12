import React from 'react'
import styles from './ProjectsStyles.module.css'
import barberinjo from '../../assets/barberinjo.avif'
import ProjectCard from '../../common/ProjectCard'
import top5 from '../../assets/top5.jpg'
import hangman from '../../assets/hangman.png'
import clods from '../../assets/Clodus.gif'


function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard link={"https://github.com/HAOR97/hairstudio-front"} h3="Barberinjo" p="Barber App" src={barberinjo} />
        <ProjectCard link={"https://github.com/HAOR97/Baskett_Quiz"} h3="Top 5" p="Basketball quiz" src={top5} />
        <ProjectCard link={"https://github.com/HAOR97/Weather-App"} h3="Clouds" p="Weather App" src={clods} />
        <ProjectCard link={"https://github.com/HAOR97/Hangman"} h3="Hangman" p="Hangman App" src={hangman} />
      </div>
    </section>
  )
}

export default Projects
