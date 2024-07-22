import React from 'react'
import styles from "../team/team.module.scss"
import { founding, board } from "../data/index"
import Image from 'next/image'
import second from "../../../../public/assets/images/second.svg"
import NavBar from '../navbar'
import Contacts from '../resuseable'

export default function Team() {
  return (
    <div className={styles.hero_container}>
      {/* <NavBar /> */}
      <div className={styles.background_image}>
        <div className={styles.background_overlay}>
          
        </div>
      </div>

      <div className={styles.founding_container}>
        <section className={styles.founding_team}>
          <div className={styles.team}>
            <b>TEAM MARITEST</b>
            <h2>Founding Team</h2>
          </div>
          <div className={styles.team_two}>
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
          <h2>Advisory Board</h2>
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
      <Contacts />
    </div>
  )
}
