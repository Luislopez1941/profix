"use client";

import React, { useState } from 'react'
import './Header.css'
import Link from 'next/link';

const Header = () => {

  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div className='hero'>
      <div className='hero__container'>
        <div className='toggle' onClick={() => setToggle(!toggle)}>
          <button className={`toggle__botton ${toggle ? 'activo' : ''}`}>
            <span className="l1 span"></span>
            <span className="l2 span"></span>
            <span className="l3 span"></span>
          </button>
        </div>
        <div>
          <h2 className='title'>ProFix</h2>
        </div>
        <div className={`nav__hero ${toggle ? 'activo' : ''}`}>
          <div className='nav__hero_container'>
            <ul className='nav__items'>
              <li className='nav__item'><Link className='nav__link' href='/login'>Unete</Link></li>
              <li className='nav__item'><Link className='nav__link' href='/login'>Explora</Link></li>
              <li className='nav__item'><Link className='nav__link' href='/login'>Sobre nosotros</Link></li>
              <li className='nav__item'><Link className='nav__link' href='/login'>Contacto</Link></li>
            </ul>
          </div>
        </div>
        <div className='nav__account'>
          <div className='btn__seller'>
            <Link className='btn__join' href='/join'>
              Unirme
            </Link>
          </div>
          <Link href='/login' className='login__hero'>
            <p className='text__login'>Iniciar sesión</p>
            <div className='icon__user'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" className="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
