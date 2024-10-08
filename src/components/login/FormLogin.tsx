import React from 'react'
import Link from 'next/link'
import './FormLogin.css'
import { storeLogin } from '@/zustand/Login'

const FormLogin = () => {
    const setFormStatus = storeLogin(state => state.setFormStatus)
    return (
        <form className='form__login'>
            <div className='titles'>
                <div className='title__main'><b>Accede a los mejores</b> <b className='profesional'>profesionales</b></div>
                <div className='title__warning'>
                    <p>Ingresa para encontrar expertos confiables que llevarán tus proyectos al siguiente nivel.</p>
                </div>
            </div>

            <div className='form__login_container'>
                <div className='container__inputs'>
                    <label>Email</label>
                    <div className='inputs__general_icons'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                        <input className='inputs__generic' type="text" name="" placeholder='Correo electronico' />
                    </div>
                </div>
                <div className='container__inputs'>
                    <label>Contraseña</label>
                    <div className='inputs__general_icons'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-key"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.52 2c1.029 0 2.015 .409 2.742 1.136l3.602 3.602a3.877 3.877 0 0 1 0 5.483l-2.643 2.643a3.88 3.88 0 0 1 -4.941 .452l-.105 -.078l-5.882 5.883a3 3 0 0 1 -1.68 .843l-.22 .027l-.221 .009h-1.172c-1.014 0 -1.867 -.759 -1.991 -1.823l-.009 -.177v-1.172c0 -.704 .248 -1.386 .73 -1.96l.149 -.161l.414 -.414a1 1 0 0 1 .707 -.293h1v-1a1 1 0 0 1 .883 -.993l.117 -.007h1v-1a1 1 0 0 1 .206 -.608l.087 -.1l1.468 -1.469l-.076 -.103a3.9 3.9 0 0 1 -.678 -1.963l-.007 -.236c0 -1.029 .409 -2.015 1.136 -2.742l2.643 -2.643a3.88 3.88 0 0 1 2.741 -1.136m.495 5h-.02a2 2 0 1 0 0 4h.02a2 2 0 1 0 0 -4" /></svg>
                        <input className='inputs__generic' type="text" name="" placeholder='Primer segundo' />
                    </div>

                </div>

            </div>
            <div className='btn'>
                <Link className='btn__create' onClick={() => setFormStatus(false)} href='/'>Iniciar sesion</Link>
            </div>
            <div className='btn__change'>
                <button className='btn' onClick={() => setFormStatus(true)}>Craer cuenta</button>
            </div>
        </form>
    )
}

export default FormLogin
