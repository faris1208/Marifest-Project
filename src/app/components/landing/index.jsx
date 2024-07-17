import React from 'react'
import styles from "../landing/landing.module.scss"
import Navbar from '../navbar'
import Image from 'next/image'
import bricks from "../../../../public/assets/images/bricks.svg"
import boys from "../../../../public/assets/images/boys.svg"
import cool from "../../../../public/assets/images/Element.svg"
import group from "../../../../public/assets/images/home.svg"
import { logo } from "../data/index"

export default function Landing() {
  return (
    <div className={styles.hero_container}>
      <Navbar />
      <div className={styles.background_image}>
        <div className={styles.background_overlay}>
          
          <div className={styles.hero_wrapper}>
            <h1>A Future Without Malaria</h1>
            <p>Innovative, bloodless, automated, and rapid diagnosis and prescription for a healthier tomorrow</p>
            <div className={styles.hero_buttons}>
              <button className={styles.hero_btn1}>Join the fight!</button>
              <button className={styles.hero_btn2}>Learn more</button>
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

      <section className={styles.heading}>
        <div className={styles.heading_first}>
          <div className={styles.heading_first_text}>
            <b>OUR RATIONALE</b>
            <h3>Why We Do What We Do</h3>
            <p>Malaria remains a leading cause of illness and death in many countries. Over 200 million cases are reported annually, with the majority (94%) being in sub-Saharan Africa. As a result, 95% of Malaria deaths occur in the region. </p>
            <p>Children under five are particularly vulnerable, with one child dying every two minutes from malaria. These are not just statistics – they are real lives, real families, and real futures at stake.</p>
            <small>Source: World Malaria Report 2023 by WHO</small>
          </div>
          <div className={styles.heading_first_img}>
            <Image 
            src={boys}
            alt='boys'
            width={100}
            className={styles.boys_img}
            />
            <div className={styles.heading_first_text_img_text}>
              <div className={styles.first_text}>
                <h3>249M</h3>
                <p>Malaria cases globally in 2022</p>
              </div>
              <div className={styles.first_text}>
                <h3>608K</h3>
                <p>Malaria deaths in 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heading_second}>
          <div className={styles.heading_second_image}>
            <Image 
            src={cool}
            alt='cool'
            width={350}
            className={styles.cool_img}
            />
          </div>
          <div className={styles.heading_second_text}>
            <h3>The Urgency of Early Malaria Diagnosis</h3>
            <p>Current diagnostic methods are often invasive, time-consuming, and inaccessible to those in remote areas. </p>
            <p>According to the Malaria Journal, community-based early diagnosis and treatment are crucial in reducing malaria deaths. These methods prevent transmission, lower recurrence rates, and are cost-effective, especially in resource-limited settings. Furthermore, early diagnosis and treatment within 24-48 hours of fever onset significantly reduce parasite transmission, thereby preventing further infections. </p>
            <p>This reality drives our unwavering commitment to developing a more effective, accessible, and non-invasive diagnostic tool. Our mission is to save lives and bring hope to communities burdened by malaria.</p>
            <small>Source: Malaria Journal</small>
          </div>
        </div>
        <div className={styles.journey_container}>
          <h2>Our Journey</h2>
          <p>A timeline of MariTest’s development, highlighting the dedication and milestones reached.</p>
          <div className={styles.box_container}>
            <Image 
            src={group}
            alt='group'
            width={1500}
            className={styles.box_img}
            />
          </div>
        </div>
        <div className={styles.sponsor_container}>
          <h2>Our Sponsors & Partners</h2>
          <div className={styles.logo_img}>
            {logo.map((item, i) => (
              <div
                key={i}
                className={styles.logo_icon}
              >
                <Image 
                src={item.icon}
                alt='logos'
                width={150}
                className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.contact}>
        <div className={styles.contact_overlay}></div>
        <div className={styles.contact_overlay_two}>
          <div className={styles.contact_us_wrapper}>
            <div className={styles.contact_us_wrapper_two}>
              <div className={styles.contact_us_text}>
                <h2>Support</h2>
                <h2>Partner</h2>
                <h2>Join</h2>
                <h2><span>Contact Us</span></h2>
              </div>
              <form action=""  className={styles.contact_us_form}>
                <div className={styles.contact_us_form_input}>
                  <input type="text" placeholder='Name' />
                  <input type="email" placeholder='Email' />
                </div>
                <div  className={styles.contact_us_form_two_input}>
                  <input type="text" placeholder='Leave a message' className={styles.last_input} />
                  <input type="button" value="Contact Us" className={styles.contact_btn}  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  )
}

