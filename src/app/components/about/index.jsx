import React from 'react'
import NavBar from '../navbar'
import bricks from "../../../../public/assets/images/bricks.svg"
import Image from 'next/image'
import styles from "../about/about.module.scss"
import kids from "../../../../public/assets/images/mission.webp"
import man from "../../../../public/assets/images/story.webp"
import yellow from "../../../../public/assets/images/yellow.svg"
import Contacts from '../resuseable'


export default function About() {
  return (
    <div className={styles.hero_container}>
      {/* <NavBar /> */}
      <div className={styles.background_image}>
        <div className={styles.background_overlay}>
          <div className={styles.hero_wrapper}>
            <div className={styles.marifest_heading}>
              <b>ABOUT MARITEST</b>
              <h2>Our Mission</h2>
              <p>At MariTest, our mission is to revolutionize malaria diagnosis and treatment in sub-Saharan Africa. We strive to create innovative, accessible, and non-invasive diagnostic tools that save lives and bring hope to communities burdened by malaria. We are committed to eradicating this devastating disease through advanced technology, real-time monitoring, and community-driven solutions.</p>
            </div>
            <div className={styles.marifest_image}>
              <Image 
              src={kids}
              alt='kids'
              width={500}
              className={styles.kids_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.bricks}>
          <Image
          src={bricks}
          alt='bricks'
          width={1000}
          className={styles.bricks_img}
           />
        </div>
      </div>
      <section className={styles.story_container}>
        <div className={styles.story_wrapper}>
          <div className={styles.story_image}>
            <Image
            src={man}
            alt='man'
            width={500}
            className={styles.man_img}
             />
          </div>
          <div className={styles.story_text}>
            {/* <b>TEAM MARITEST</b> */}
            <h2>Our Story</h2>
            <p>In 2021, an unexpected encounter changed our founder Kakooza Hakims life that sparked the creation of MariTest. While interning on the remote Bussi Island in Uganda, Kakooza experienced a severe bout of fever. Despite having faced fever before, this time was different and much worse.</p>
            <p>One morning, Kakooza felt the familiar signs of malaria. But by this time, the fever had escalated. He went to a local healthcare center, only to wait three grueling hours and be told that they had run out of Malaria Rapid Diagnostic Test kits (RDTs) and antimalarial drugs. With COVID-19 lockdowns in place, he was stuck on the island with few options.</p>
            <p>Desperate, Kakooza turned to local remedies to manage his fever. His condition worsened, but luckily, a special travel permit allowed him to reach a private hospital on the mainland. By then, the parasites had severely damaged his liver, bringing him close to death.</p>
          </div>
        </div>
        <div className={styles.story_wrapper_two}>
          <div className={styles.story_wrapper_two_text}>
            <p>During his recovery, Kakooza reflected on the harsh reality faced by those without access to adequate healthcare. Malaria is a massive burden in Africa, infecting 241 million people and killing over half a million in 2020 alone. Every 75 seconds, a child under five died from the disease. The major issues were limited access to early diagnosis and treatment, poor vector control, lack of medical facilities, and a shortage of healthcare workers.</p>
            <p>Determined to make a difference, Kakooza, leveraging his machine learning expertise from Fundi Bots Uganda and entrepreneurial skills from the African Leadership University, teamed up with four other amazing individuals with diverse skills but on a shared mission to fight malaria in sub-Saharan Africa. MariTest was created.</p>
            <p>MariTest is a reusable, non-invasive, automated diagnostic and prescription device that was designed to bridge the gap in malaria diagnosis and treatment, embodying the teams commitment to a malaria-free future.</p>
          </div>
          <div className={styles.yellow_box}>
            <Image
            src={yellow}
            alt='yellow'
            width={350}
            className={styles.yellow_img}
             />
          </div>
        </div>
      </section>
      <Contacts />
    </div>
  )
}
