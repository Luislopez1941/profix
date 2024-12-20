"use client";

import React from 'react';
import './Main.css';
import items from './json/items.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../Card';
import Slider from "react-slick";
import { Search, Check, CreditCard } from 'lucide-react';


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
                                <Card item={item} />
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
                <div className="how-it-works">
                    <h2 className="title">Cómo funciona ProFix</h2>
                    <div className="steps">
                        <div className="step">
                            <div className="icon search">
                                <Search size={24} />
                            </div>
                            <div className="content">
                                <h3>Búsqueda simple</h3>
                                <p>Usa nuestra barra de búsqueda para encontrar el servicio doméstico que necesitas, o navega por nuestras categorías.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="icon check">
                                <Check size={24} />
                            </div>
                            <div className="content">
                                <h3>Selección simple</h3>
                                <p>Elige el servicio adecuado basándote en calificaciones, nivel de experiencia y comentarios.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="icon card">
                                <CreditCard size={24} />
                            </div>
                            <div className="content">
                                <h3>Pago fácil</h3>
                                <p>Contrata a tu profesional de confianza de manera fácil y segura. Pagos protegidos, comunicación directa y servicios puntuales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row__five'>
                <div className='additional__information'>
                    <h2>Información Adicional</h2>
                    <p>ProFix está comprometido a proporcionar servicios domésticos de alta calidad y confiables. Nuestro objetivo es hacer que tu vida sea más fácil y cómoda.</p>
                    <ul>
                        <li>Profesionales verificados y de confianza</li>
                        <li>Servicios disponibles 24/7</li>
                        <li>Garantía de satisfacción del cliente</li>
                        <li>Precios transparentes y competitivos</li>
                    </ul>
                    <button className='learn-more'>Aprende más</button>
                </div>
            </div>
        </div>
    );
}

export default Main;
