"use client"
import React from 'react'
import styles from "../resuseable/contact.module.scss"
import { useState } from 'react'

export default function Contacts() {

  const [isLoading, setIsLoading] = useState(false);

  const simulateApiCall = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await simulateApiCall();
      // await onClick();
    } finally {
      setIsLoading(false);
    }
  };

  // const handleButtonClick = async () => {
  //   await simulateApiCall();
  //   alert('succesfull');
  // };


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
              <form action="https://formspree.io/f/xdknappp" method='POST'  className={styles.contact_us_form}>
                <div className={styles.contact_us_form_input}>
                  <input type="text" name='Full Name' placeholder='Name'  required />
                  <input type="email" name='email' placeholder='Email'  required />
                </div>
                <div  className={styles.contact_us_form_two_input}>
                  <input type="text" name='message' placeholder='Leave a message' className={styles.last_input} required />
                  {/* <button className={styles.contact_btn} type="submit">Contact Us</button> */}
                  {/* <input type="button" value="" className={styles.contact_btn}  /> */}
                  <button onClick={handleClick} type="submit" className={isLoading? styles.load_btn : styles.contact_btn}>
                    {isLoading? 'Loading...' : 'Send a message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
