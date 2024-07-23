"use client";
import React, {useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../navbar/navbar.module.scss";
import Image from "next/image";
import logo from "../../../../public/assets/images/logo.svg"
import menu from "../../../../public/assets/images/menu.svg"
import exit from "../../../../public/assets/images/exx.png"
// import exx from "../../../../public/assets/images/exx.svg"

const NavBar = () => {

  const [color, setColor] = useState(false)
  const [mobile, setMobile] = useState(true);

  const toggleMenu = () => {
    setMobile((open) => !open)
}

const changeColor = useCallback(() => {
  if (window.scrollY >= 510){
    setColor(true)
    setMobile(mobile);
  }else {
    setColor(false)
  }
}, [mobile]);

// const changeColor = () => {
//   if (window.scrollY >= 510){
//     setColor(true)
//     setMobile(mobile);
//   }else {
//     setColor(false)
//   }
// }


  useEffect(() => {
  
    window.addEventListener('scroll', changeColor)
  }, [changeColor]);

  const router = useRouter();

  const handleNavbar = () => {
    toggleMenu()
  }
  

  return (
      <nav className={color ? styles.navbar_bg : styles.navbar}>
        <div className={styles.logo_image}>
          <Link href="/landing">
            <Image 
            src={logo}
            alt="logo"
            width={180}
            className={styles.logo_img}
            />
          </Link>
        </div>
        <div className={mobile ? styles.Navbar_List : styles.Navbar_List_isopen}>
          
          <ul>
            <span
            onClick={toggleMenu}
            >
              <Image className={styles.exx} src={exit} alt="menu" width={30}/>
            </span>
          
            <li  onClick={() => {handleNavbar("/about") ;}}>
              <Link href="/about">About Us</Link>
            </li>
            <li  onClick={() => {handleNavbar("/team") ;}}>
              <Link href="/team">The Team</Link>
            </li>
            <li  onClick={() => {handleNavbar("/contact") ;}}>
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