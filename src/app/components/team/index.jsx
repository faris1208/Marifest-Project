import React from 'react'
import styles from "../team/team.module.scss"
import { founding, board } from "../data/index"
import Image from 'next/image'
import second from "../../../../public/assets/images/second.svg"
import NavBar from '../navbar'
import Contacts from '../resuseable'
import Link from 'next/link'

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
                {founding.map((item, index) => (
                  <div
                    key={index}
                    className={styles.logo_icon}
                  >
                    <Image 
                    src={item.icon}
                    alt='logos'
                    width={100}
                    className={styles.logo}
                    />
                    
                      {/* <b>{item.name}</b> */}
                      {item.href.startsWith('http') ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.name}
                      </a>
                    ) : (
                      <Link href={item.href}>
                        <a >{item.name}</a>
                      </Link>
                    )}
                    
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
          {/* <b>MARITEST</b> */}
          <h2>Advisors </h2>
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
                    {item.href.startsWith('http') ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.name}
                      </a>
                    ) : (
                      <Link href={item.href}>
                        <a >{item.name}</a>
                      </Link>
                    )}
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
