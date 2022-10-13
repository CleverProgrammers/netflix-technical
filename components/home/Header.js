import Image from 'next/image'
import { useState, useEffect } from 'react'
import style from '../../styles/home/Header.module.css'
import logo from '../../public/logo.png'

const Header = () => {
  const [showHeaderBg, setHeaderBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setHeaderBg(true)
      } else {
        setHeaderBg(false)
      }
    })

    return () => {
      window.removeEventListener('scroll', null)
    }
  }, [])

  return (
    <div
      className={showHeaderBg ? `${style.header} ${style.black}` : style.header}
    >
      <div className={style.logoContainer}>
        <Image
          className={style.image}
          src={logo}
          layout='fill'
          alt='Netflix Logo'
        />
      </div>

      <div className={style.profileImageContainer}>
        <Image
          className={`${style.image} ${style.profileImage}`}
          layout='fill'
          src={`https://avatars.dicebear.com/api/identicon/${'user'}.svg`}
          alt='User Image'
        />
      </div>
    </div>
  )
}

export default Header
