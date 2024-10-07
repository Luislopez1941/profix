
'use client'

import React, { useState } from 'react'
import './page.css'
import '../../components/Header.css'
import itemServi from '../../components/Home/json/items.json'
import Link from 'next/link';

interface Skill {
  name: string;
}

interface Item {
  image: string;
  fullname: string;
  skills: Skill[];
  starts: number[]; // Asegúrate de que esto sea el tipo correcto
  // name: string; // Elimina esta línea si no es necesaria
}

const Page = () => {


  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div className='workers'>
      <header className='hero'>
        <div className='row__one'>
          <div className='toggle' onClick={() => setToggle(!toggle)}>
            <button className={`toggle__botton ${toggle ? 'activo' : ''}`}>
              <span className="l1 span"></span>
              <span className="l2 span"></span>
              <span className="l3 span"></span>
            </button>
          </div>
          <div>
            <p className='profix'>ProFix</p>
          </div>
          <div>
            <Link href='/login' className='login__hero'>
              <p className='text__login'>Iniciar sesión</p>
              <div className='icon__user'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" className="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
              </div>
            </Link>
          </div>
        </div>
        <div className='row__two'>
          <div className='inputs__general_icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            <input className='inputs__generic' type="text" placeholder='Buscar servicios'/>
          </div>
          <div className='filter'>
            <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>
          </div>
        </div>
      </header>
      <section className='main__workers'>
        <div className='row__one'>
          <div className='item'>
            <p>Categorias</p>
          </div>
          <div className='item'>
            <p>Categorias</p>
          </div>
          <div className='item'>
            <p>Categorias</p>
          </div>
          <div className='item'>
            <p>Categorias</p>
          </div>
          <div className='item'>
            <p>Categorias</p>
          </div>
        </div>
        <div className='row__three'>

          {itemServi.map((item: Item, index: number) => (
            <div className='item' key={index}>
              <div className='image__container' style={{ backgroundImage: `url(${item.image})` }} />
              <div className='content__data'>
                <p className='name'>{item.fullname}</p>
                <div className='experience'><p className='number__experience'>7</p> años de experiencia</div>
                <p className='reviews'>Me gusta ofrecer servicios de calidad</p>
                <div className='skills'>
                  {item.skills.map((skill: Skill, skillIndex: number) => (
                    <p className={skill.name} key={skillIndex}>
                      {skill.name}
                    </p>
                  ))}
                </div>
                <div className='starts'>
                  {item.starts.map((_, starIndex: number) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className='icon icon-tabler icons-tabler-filled icon-tabler-star'
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                    </svg>
                  ))}
                </div>
                <div className='btn'>
                  <Link href='/profile' >Ver perfil</Link>
                </div>
              </div>
            </div>
          ))}


        </div>
      </section>
    </div>
  )
}

export default Page
