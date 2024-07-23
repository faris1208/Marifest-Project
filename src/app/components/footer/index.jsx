import React from 'react'
import styles from "../footer/footer.module.scss"
import logo from "../../../../public/assets/images/logo.svg"
import Image from 'next/image'
import{ face } from "../data/index"
import line from "../../../../public/assets/images/line.svg"
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.footer_container}>
        <div className={styles.logo}>
          <Image 
          src={logo}
          alt='logo'
          width={150}
          className={styles.logoPimg}
          />
        </div>
        <div className={styles.logo_img}>
            {face.map((item, i) => (
              <div
                key={i}
                className={styles.logo_icon}
              >

                {/* {face.facebook && (
              <a href={face.facebook} target="_blank" rel="noopener noreferrer">
                <Image 
                src={face.icons}
                alt='logos'
                width={18}
                className={styles.logo}
                />
              </a>
            )} */}
                {/* <Image 
                src={item.icon}
                alt='logos'
                width={18}
                className={styles.logo}
                /> */}
                {item.href.startsWith('http') ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                     <Image 
                      src={item.icon.src}
                      alt='icon'
                      width={item.icon.width}
                      height={item.icon.height}
                      className={styles.logo}
                    />
                  </a>
                ) : (
                  <Link href={item.href}>
                    <a>
                      <Image 
                        src={item.icon.src}
                        alt='logos'
                        width={18}
                        className={styles.logo}
                      />
                    </a>
                  </Link>
                )}

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
