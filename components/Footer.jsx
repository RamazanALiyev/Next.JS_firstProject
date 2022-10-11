import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import vercel from '../assets/vercel.svg'
const Footer = () => {
  return (
    <footer className={`${styles.footer} border-t`}>
      <div className='h-[10vh] w-11/12 flex justify-center items-center'>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Bütün huquqlar qorunur</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer;