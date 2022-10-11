import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import headerLogo from '../assets/headerlogo.jpg'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={`${styles.header} border-b`}>
      <div className='flex justify-between items-center h-[10vh] w-11/12 mx-auto'>
        <Image className='cursor-pointer' src={headerLogo} alt='header logo' width={80} height={50} />
        <ul className='flex'>
          <li className='mx-4'><Link href="/">main</Link></li>
          <li className='mx-4'><Link href="/users">users</Link></li>
          <li className='mx-4'><Link href="/about">about</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;