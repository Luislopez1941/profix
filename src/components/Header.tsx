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
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                  Perfil
                </Link>
              </li>
              <li className='nav__item'>
                <Link className='nav__link' href='/login'>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-label"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.52 6a2 2 0 0 1 1.561 .75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624a2 2 0 0 1 -1.561 .751h-10.52a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3z" /></svg>
                  Perfiles guardados
                </Link>
              </li>
              <li className='nav__item'>
                <Link className='nav__link' href='/login'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-message-report"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-6 10a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -6a1 1 0 0 0 -1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0 -1 -1" /></svg>
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
