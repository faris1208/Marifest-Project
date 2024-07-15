import React from 'react'
import styles from "../team/team.module.scss"
import { founding, board } from "../data/index"
import Image from 'next/image'
import second from "../../../../public/assets/images/second.svg"
import NavBar from '../navbar'

export default function Team() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.background_image}>
        <div className={styles.background_overlay}>
          <NavBar />
        </div>
      </div>

      <div className={styles.founding_container}>
        <section className={styles.founding_team}>
          <b>TEAM MARITEST</b>
          <h2>Founding Team</h2>
          <div className={styles.logo_img}>
              {founding.map((item, i) => (
                <div
                  key={i}
                  className={styles.logo_icon}
                >
                  <Image 
                  src={item.icon}
                  alt='logos'
                  width={100}
                  className={styles.logo}
                  />
                  <b>{item.name}</b>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
        </section>

        <div className={styles.line_box}>
            <Image 
            src={second}
            alt='line'
            width={1160}
            className={styles.line_img}
            />
          </div>

          <section className={styles.board_team}>
          <b>TEAM MARITEST</b>
          <h2>Founding Team</h2>
          <div className={styles.logo_img}>
              {board.map((item, i) => (
                <div
                  key={i}
                  className={styles.logo_icon}
                >
                  <Image 
                  src={item.icon}
                  alt='logos'
                  width={100}
                  className={styles.logo}
                  />
                  <b>{item.name}</b>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
        </section>
      </div>
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
