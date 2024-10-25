'use client';

import React from 'react';
import './FormLogin.css';
import { storeLogin } from '@/zustand/Login';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
}

const FormLogin: React.FC = () => {
  const setFormStatus = storeLogin(state => state.setFormStatus);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Correo electrónico inválido').required('Requerido'),
      password: Yup.string().min(6, 'Debe tener al menos 6 caracteres').required('Requerido')
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values, { setSubmitting, setErrors, validateForm }) => {
      const errors = await validateForm();
      if (Object.keys(errors).length === 0) {
        try {
          const response = await fetch('/api/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });

          if (!response.ok) {
            console.error('Error en la respuesta del servidor');
          }
          
          // router.push('/')  // Descomentar cuando se decida implementar el enrutamiento.
          
        } catch (error) {
          console.error('Error en el envío del formulario:', error);
        } finally {
          setSubmitting(false);
        }
      } else {
        setErrors(errors);
        setSubmitting(false);
      }
    }
  });

  return (
    <form className='form__login' onSubmit={formik.handleSubmit}>
      {/* Tu estructura de formulario */}
      <div className='btn'>
        <button className='btn__create' type="submit" onClick={() => setFormStatus(false)}>
          Iniciar sesión
        </button>
      </div>
      <div className='btn__change'>
        <button
          className='btn'
          type="button"
          onClick={(event) => {
            event.preventDefault(); // Evita el envío del formulario
            setFormStatus(true);
          }}
        >
          Crear cuenta
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
