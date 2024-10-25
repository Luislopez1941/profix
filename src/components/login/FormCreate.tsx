'use client'

import React from 'react'
import { storeLogin } from '@/zustand/Login'
import './FormCreate.css'
import APIs from '@/services/APIS'
import { useFormik } from 'formik'
import * as Yup from 'yup'

interface FormValues {
    firstName: string;
    firstSurname: string;
    phone: string;
    email: string;
    password: string;
}

const FormCreate: React.FC = () => {
    const setFormStatus = storeLogin(state => state.setFormStatus)

    const formik = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            firstSurname: '',
            phone: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Requerido'),
            firstSurname: Yup.string().required('Requerido'),
            phone: Yup.string().required('Requerido'),
            email: Yup.string().email('Correo electrónico inválido').required('Requerido'),
            password: Yup.string().min(6, 'Debe tener al menos 6 caracteres').required('Requerido')
        }),
        onSubmit: async (values) => {
            console.log('Formulario enviado:', values)
            try {
                await APIs.createUsers(values)
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <form className='form__login' onSubmit={formik.handleSubmit}>
            <div className='titles'>
                <h2 className='title__main'>Crear cuenta</h2>
                <div className='title__warning'>
                    <p>Inicia sesión para ser parte de nuestra comunidad de profesionales.</p>
                </div>
            </div>
            <div className='form__login_create_container'>
                <div className='row__one'>
                    <div>
                   
                        <input
                            className='inputs__general'
                            type="text"
                            name="firstName"
                            placeholder='Primer nombre'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div>{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                    <div>
                 
                        <input
                            className='inputs__general'
                            type="text"
                            name="firstSurname"
                            placeholder='Apellido paterno'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstSurname}
                        />
                        {formik.touched.firstSurname && formik.errors.firstSurname ? (
                            <div>{formik.errors.firstSurname}</div>
                        ) : null}
                    </div>
                </div>
                <div>
                 
                    <input
                        className='inputs__general'
                        type="text"
                        name="phone"
                        placeholder='Numero telefonico'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div>{formik.errors.phone}</div>
                    ) : null}
                </div>
                <div className='email'>
                 
                    <input
                        className='inputs__general'
                        type="text"
                        name="email"
                        placeholder='Correo electrónico'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className='password'>
                   
                    <input
                        className='inputs__general'
                        type="password"
                        name="password"
                        placeholder='Contraseña'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                </div>
            </div>
            <div className='btn'>
                <button className='btn__create' type="submit">Crear cuenta</button>
            </div>
            <div className='btn__change'>
                <button className='btn' type="button" onClick={() => setFormStatus(false)}>Iniciar sesión</button>
            </div>
        </form>
    )
}

export default FormCreate
