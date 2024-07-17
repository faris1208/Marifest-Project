import React from 'react'
import styles from "../contact/contact.module.scss"
import NavBar from '../navbar'

export default function Contact() {
  return (
    <div className={styles.hero_container}>
      <NavBar />
        <section className={styles.contact}>
        <div className={styles.contact_overlay}></div>
        <div className={styles.contact_overlay_two}>
          
          <div className={styles.contact_us_wrapper}>
          
            <div className={styles.contact_us_wrapper_two}>
              <div className={styles.contact_us_text}>
                <h2>Get in touch</h2>
                <p>We would love to hear from you. Whether you have questions, want to collaborate, or need more information about MariTest, please reach out to us.</p>
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
