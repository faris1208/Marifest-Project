"use client";
import React, {useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../navbar/navbar.module.scss";
import Image from "next/image";
import logo from "../../../../public/assets/images/logo.svg"
import menu from "../../../../public/assets/images/menu.svg"
import exit from "../../../../public/assets/images/exit.svg"
import exx from "../../../../public/assets/images/exx.png"

const NavBar = () => {

  const [color, setColor] = useState(false)
  const [mobile, setMobile] = useState(true);

  const toggleMenu = () => {
    setMobile((open) => !open)
}

const changeColor = () => {
  if (window.scrollY >= 510){
    setColor(true)
    setMobile(mobile);
  }else {
    setColor(false)
  }
  
}


  useEffect(() => {
  
    window.addEventListener('scroll', changeColor)
  }, []);

  const router = useRouter();
  

  return (
      <nav className={color ? styles.navbar_bg : styles.navbar}>
        <div className={styles.logo_image}>
          <Link href="/landing">
            <Image 
            src={logo}
            alt="logo"
            width={150}
            className={styles.logo_img}
            />
          </Link>
        </div>
        <div className={mobile ? styles.Navbar_List : styles.Navbar_List_isopen}>
          
          <ul>
            <span
            className={styles.exx}
            onClick={toggleMenu}
            >
              <Image src={exx} alt="menu" width={30} className={styles.exx_img}/>
            </span>
          
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/team">The Team</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div id={styles.Hamburger}> 
            <span
              className="Hamburger span"
              onClick={toggleMenu}
            >
              <div className="Hamburger">
                {mobile ? <Image src={menu} alt="menu" width={25}/> : <Image src={exit} alt="menu" width={20}/>}
              </div>
            </span>
        </div>
      </nav>
  );
};

export default NavBar;