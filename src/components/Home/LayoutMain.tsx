"use client";

import React, { useState } from 'react';
import './LayoutMain.css';
import Link from 'next/link';
import { Search } from 'lucide-react';

interface State {
    id: number;
    name: string;
}

interface City {
    id: number;
    name: string;
}

const LayoutMain = () => {
    const [selectState, setSelectState] = useState<boolean>(false);
    const [selectedState, setSelectedState] = useState<number | null>(null); // Specify the type

    const state: State[] = [
        {
            id: 1,
            name: 'Quintana Roo',
        },
    ];

    const citys: City[] = [
        {
            id: 1,
            name: 'Cancun',
        },
    ];

    const openSelectStore = () => {
        setSelectState(!selectState);
    };

    const handleCompaniesChange = (state: State) => { // Specify the type
        setSelectedState(state.id);
        setSelectState(false);
    };

    const [selectCity, setSelectCity] = useState<boolean>(false);
    const [selectedCity, setSelectedCity] = useState<number | null>(null); // Specify the type

    const openSelectCity = () => {
        setSelectCity(!selectCity);
    };

    const handleCityChange = (city: City) => { // Specify the type
        setSelectedCity(city.id);
        setSelectCity(false);
    };

    return (
        <div className='layout'>
            <div className='layout__container'>
                <div className='text__search'>
                    <div>
                        <p className='text__main'>Donde buscar un servicio es Fácil y Seguro</p>
                        {/* <div className='text__two'>
                            <p>Fácil y Seguro</p>
                        </div> */}
                    </div>
                    <div className='warning'>
                        <p>
                            Revisa la calificación de los trabajadores para asegurar un trabajo de calidad
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-shield-half"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.998 2l.032 .002l.086 .005a1 1 0 0 1 .342 .104l.105 .062l.097 .076l.016 .015l.247 .21a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.791 -2.75l.046 -.036l.053 -.041a1 1 0 0 1 .217 -.112l.075 -.023l.036 -.01a1 1 0 0 1 .12 -.022l.086 -.005zm.002 2.296l-.176 .135a13 13 0 0 1 -7.288 2.572l-.264 .006l-.064 .31a11 11 0 0 0 1.064 7.175l.17 .314a11 11 0 0 0 6.49 5.136l.068 .019z" /></svg>
                        </p>
                    </div>
                </div>
                <div className='search'>
                    <div className='row__one'>
                        <div>
                            <div className='inputs__general_icons'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} fill='currentColor' viewBox="0 0 448 512"><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" /></svg>
                                <input className='inputs__generic' type="text" placeholder='Buscar tipo de servicio' />
                            </div>
                        </div>
                        <div className='select__container'>
                            <div className='select-btn__general'>
                                <div className={`select-btn ${selectState ? 'active' : ''}`} onClick={openSelectStore}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={15} fill='currentColor' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                    <div>
                                        <p>{selectedState ? state.find((s) => s.id === selectedState)?.name : 'Selecciona'}</p>
                                        <svg className='chevron__down' fill='#6c6c6e' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                    </div>
                                </div>
                                <div className={`content ${selectState ? 'active' : ''}`}>
                                    <ul className={`options ${selectState ? 'active' : ''}`} style={{ opacity: selectState ? '1' : '0' }}>
                                        {state?.map((state) => (
                                            <li key={state.id} onClick={() => handleCompaniesChange(state)}>
                                                {state.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='select__container'>
                            <div className='select-btn__general'>
                                <div className={`select-btn ${selectCity ? 'active' : ''}`} onClick={openSelectCity}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={15} fill='currentColor' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                    <div>
                                        <p>{selectedCity ? citys.find((s) => s.id === selectedCity)?.name : 'Selecciona'}</p>
                                        <svg className='chevron__down' fill='#6c6c6e' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                    </div>
                                </div>
                                <div className={`content ${selectCity ? 'active' : ''}`}>
                                    <ul className={`options ${selectCity ? 'active' : ''}`} style={{ opacity: selectCity ? '1' : '0' }}>
                                        {citys?.map((city) => (
                                            <li key={city.id} onClick={() => handleCityChange(city)}>
                                                {city.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='btn-search'>
                            <Link href='/workers' className='btn'>
                                Buscar
                                <Search strokeWidth={1.75} />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutMain;
