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
            <div className='sidebar__profile'>
              <div>
                <div className='image__profile-sidebar'>
                  <div className='image__container-sidebar'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                  </div>
                </div>
                <p className='sidebar__profile-name'>Luis Lopez</p>
                <div className='sidebar__profile-label'>
                  <p>Seguidos</p>
                  <p>Seguidor</p>
                </div>
              </div>
              <div>
                <div className='toggle' onClick={() => setToggle(!toggle)}>
                  <button className={`toggle__botton ${toggle ? 'activo' : ''}`}>
                    <span className="l1 span"></span>
                    <span className="l2 span"></span>
                    <span className="l3 span"></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className='nav__items'>
              <li className='nav__item'>
                <Link className='nav__link' href='/login'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
                  Perfil
                </Link>
              </li>
              <li className='nav__item'>
                <Link className='nav__link' href='/login'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                  Perfiles guardados
                </Link>
              </li>
              <li className='nav__item'>
                <Link className='nav__link' href='/login'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                  Contacto
                </Link></li>
            </ul>
            <div className='sidebar__end'>
              <div className='sidebar__end_container'>
                <p>Configuracion</p>
              </div>
            </div>
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
