import React from 'react'
import styles from "../footer/footer.module.scss"
import logo from "../../../../public/assets/images/logo.svg"
import Image from 'next/image'
import{ facebook } from "../data/index"
import line from "../../../../public/assets/images/line.svg"

export default function Footer() {
  return (
    <div className={styles.footer_container}>
        <div className={styles.logo}>
          <Image 
          src={logo}
          alt='logo'
          width={100}
          className={styles.logoPimg}
          />
        </div>
        <div className={styles.logo_img}>
            {facebook.map((item, i) => (
              <div
                key={i}
                className={styles.logo_icon}
              >
                <Image 
                src={item.icon}
                alt='logos'
                width={15}
                className={styles.logo}
                />
              </div>
            ))}
          </div>
          <div className={styles.line_box}>
            <Image 
            src={line}
            alt='line'
            width={800}
            className={styles.line_img}
            />
          </div>

          <div className={styles.footer_last}>
            <p>© 2024 MariTest Africa. All rights reserved.</p>
            <div className={styles.privacy}>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
    </div>
  )
}
