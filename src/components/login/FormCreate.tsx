import React from 'react'
import { storeLogin } from '@/zustand/Login'


const FormCreate = () => {
    const setFormStatus = storeLogin(state => state.setFormStatus)
    return (
        <form className='form__login'>
            <div className='titles'>
                <h2 className='title__main'>¡Únete a nuestro equipo y sé parte de este gran comienzo</h2>
                <div className='title__warning'>
                    <p>Inicia sesión para ser parte de nuestra comunidad de profesionales.</p>
                </div>
            </div>
            <div className='form__login_container'>
                <div>
                    <label>Primer nombre</label>
                    <input className='inputs__general' type="text" name="" placeholder='Primer nombre' />
                </div>
                <div>
                    <label>Primer segundo</label>
                    <input className='inputs__general' type="text" name="" placeholder='Primer segundo' />
                </div>
                <div>
                    <label>Apellido paterno</label>
                    <input className='inputs__general' type="text" name="" placeholder='Apellido paterno' />
                </div>
                <div>
                    <label>Apellido materno</label>
                    <input className='inputs__general' type="text" name="" placeholder='Apellido materno' />
                </div>
                <div>
                    <label>Numero telefonico</label>
                    <input className='inputs__general' type="text" name="" placeholder='Numero telefonico' />
                </div>
            </div>
            <div className='btn'>
                <button className='btn__create' onClick={() => setFormStatus(false)} >Craer cuenta</button>
            </div>
            <div className='btn__change'>
                <button className='btn' onClick={() => setFormStatus(false)} >Iniciar sesion</button>
            </div>
        </form>
    )
}

export default FormCreate
