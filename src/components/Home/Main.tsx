"use client";

import React from 'react';
import './Main.css';
import items from './json/items.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

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

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const Main = () => {
    return (
        <div className='main'>
            <div className='row__four'>
                <div>
                    <div className='left'>
                        Recuerda que puedes calificar a profesionales para reconocer su trabajo
                    </div>

                    <div className='right'>
                        Una buena calificación habla de un buen servicio
                    </div>
                </div>
            </div>
            <div className='row__one'>
                <div className='title'>
                    <p>Los trabajadores con mejores calificaciones</p>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                    {items.map((item: Item, index: number) => (
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
                                    <button>Ver perfil</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
                <div className='best__services'>
                    
                </div>
            </div>
            <div className='row__two'>
                <div>
                    <div className='left'>
                        <p>En nuestro sitio, te ofrecemos un mundo de posibilidades para todas tus necesidades.</p>
                    </div>
                    <div className='right'>
                        <h2>¡Descubre la Excelencia en Servicios!</h2>
                        <p>En nuestro sitio, te ofrecemos un mundo de posibilidades para todas tus necesidades.</p>
                        <div>
                            Desde plomería hasta electricidad, puedes encontrar una amplia gama de profesionales listos para ayudarte.
                            Lo mejor de todo: cada servicio que ofrecemos es <strong>100% seguro</strong> y <strong>confiable</strong>.

                            ¡Tu satisfacción es nuestra prioridad!
                        </div>
                    </div>
                </div>
            </div>
            <div className='row__three'>
                <div className='how-it-works'>
                    <div className='title'>
                        <h2>Cómo funciona ProFix</h2>
                    </div>

                    <div className='step'>
                        <div className='icon'>
                            <div>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>

                            </div>
                        </div>
                        <div className='content'>
                            <h3>Búsqueda simple</h3>
                            <p>Usa nuestra barra de búsqueda para encontrar el servicio doméstico que necesitas, o navega por nuestras categorías.</p>
                        </div>
                    </div>

                    <div className='step'>
                        <div className='icon'>
                            <div>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
                            </div>
                        </div>
                        <div className='content'>
                            <h3>Selección simple</h3>
                            <p>Elige el servicio adecuado basándote en calificaciones, nivel de experiencia y comentarios, o usa filtros como Freelancer que hable español.</p>
                        </div>
                    </div>

                    <div className='step'>
                        <div className='icon'>
                            <div>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-credit-card-pay"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" /><path d="M3 10h18" /><path d="M16 19h6" /><path d="M19 16l3 3l-3 3" /><path d="M7.005 15h.005" /><path d="M11 15h2" /></svg>
                            </div>
                        </div>
                        <div className='content'>
                            <h3>Pago fácil</h3>
                            <p>Contrata a tu profesional de confianza de manera fácil y segura. Pagos protegidos, comunicación directa y servicios puntuales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
