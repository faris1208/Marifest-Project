import React from 'react'
import styles from "../resuseable/contact.module.scss"

export default function Contacts() {
  return (
    <div>
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
