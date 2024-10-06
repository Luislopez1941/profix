import React from 'react'
import './page.css'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='success'>
      <div className='success__container'>
        <div className='success__message'>
          <h1>¡Registro Exitoso!</h1>
          <p>Tu cuenta ha sido creada con éxito. Ahora puedes explorar nuestras opciones y empezar a disfrutar de nuestros servicios.</p>
          <p>Aquí tienes algunas sugerencias para empezar:</p>
          <ul>
            <li>Completa tu perfil para recibir recomendaciones personalizadas.</li>
            <li>Explora nuestra sección de servicios destacados.</li>
            <li>Lee las opiniones de otros usuarios sobre los profesionales disponibles.</li>
          </ul>
          <Link className='btn-login' href='/login'>
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
