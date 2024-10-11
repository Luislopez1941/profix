import React from 'react';
import './styles/Card.css';
import Link from 'next/link';
import { Star } from 'lucide-react';

// Define la interfaz para los elementos Skill
interface Skill {
    name: string;
}

// Define la interfaz para el objeto 'item'
interface Item {
    image: string;
    fullname: string;
    skills: Skill[];
    starts: number[]; // Esto representa las estrellas, cada número sería una estrella
}

// Define la interfaz de los props que se pasarán al componente Card
interface CardProps {
    item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <div className='card'>
            <div className='card__container'>
                <div
                    className='card__image'
                    style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className='card__content'>
                    <div>
                        <p className='name'>{item.fullname}</p>
                    </div>
                    <div>
                        <p className='reviews'>Me gusta ofrecer servicios de calidad</p>
                    </div>
                    <div className='qualifications'>
                        <div className='score'>
                            <small>8.9</small>
                        </div>
                        <div className='text__title'>
                            <small>muy bueno</small>
                        </div>
                        <div className='starts'>
                            {item.starts.map((_, index) => (
                                <div key={index}>
                                    <Star
                                        style={{
                                            width: '1rem',
                                            height: '1rem',
                                            color: 'rgb(209 213 219 / 1)',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='skills'>
                        {item.skills.map((skill, skillIndex) => (
                            <p className={skill.name} key={skillIndex}>
                                {skill.name}
                            </p>
                        ))}
                    </div>
                    <div className='btn'>
                        <Link href='/profile'>Ver perfil</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
