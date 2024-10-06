"use client";

import React from 'react';
import './Main.css';
import items from './json/items.json';


const Main = () => {
    return (
        <div className='main'>
            <div className='row__four'>
                <div>
                    <div className='left'>
                        Recuerda que puedes calificar a profecionales para reconocer su trabajo
                    </div>
                    <div className='right'>
                        Una buenas calificacion habla de un buen servicio

                    </div>
                </div>
            </div>
            <div className='row__one'>
                <div className='title'>
                    <p>Los trabajadores con mejores calificaciones</p>
                </div>
                <div className='best__services'>
                    {items.map((x: any, index: any) => (
                        <div className='item' key={index}>
                            <div className='image__container' style={{ backgroundImage: `url(${x.image})` }} />
                            <div className='content__data'>
                                <p>{x.fullname}</p>
                                <div className='skills'>
                                    {x.skills.map((x: any) => (
                                        <p className={x.name}>{x.name}</p>
                                    ))}
                                </div>
                                <div>
                                    {x.starts.map((_: any) => (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-star">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                                        </svg>
                                    ))}

                                </div>
                                <p>{x.name}</p>
                            </div>
                            <div className='btn'>
                                <button>Ver perfil</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='row__two'>
                <div>
                    <div className='left'>

                    </div>
                    <div className='right'>
                        <h2>¡Descubre la Excelencia en Servicios!</h2>
                        <p>En nuestro sitio, te ofrecemos un mundo de posibilidades para todas tus necesidades.</p>
                        <div>
                            Desde plomería hasta electricidad, puedes encontrar una amplia gama de profesionales listos para ayudarte.
                            Lo mejor de todo: cada servicio que ofrecemos es **100% seguro** y **confiable**.
                            ¡Tu satisfacción es nuestra prioridad!
                        </div>
                    </div>
                </div>
            </div>
            <div className='row__three'>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Main;
