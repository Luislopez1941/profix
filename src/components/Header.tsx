"use client";

import React from 'react'
import './Header.css'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <div>
          <h2 className='title'>ProFix</h2>
        </div>
        <div className='nav__hero'>
          <div className='btn__seller'>
            <Link className='btn__join' href='/join'>
              Unirme
            </Link>
          </div>
          <div className='login__hero'>
            <Link href='/login' className='text__login'>Iniciar sesión</Link>
            <div className='icon__user'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" className="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
