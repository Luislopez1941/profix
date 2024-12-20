import React from 'react'
import './Profile.css'
import Image from 'next/image'
import userImg from '../../../assets/img/user.jpeg'
import { User } from 'lucide-react';
import Link from 'next/link';

// import img1 from '../../assets/img/img_1.avif'
// import img2 from '../../assets/img/img_2.avif'
// import img3 from '../../assets/img/img_3.avif'
// import img4 from '../../assets/img/img_4.avif'
// import img5 from '../../assets/img/img_5.avif'
// import img6 from '../../assets/img/img_6.avif'

const Profile = () => {

  const user = ''

  return (
    <div className="user__profile">
      <div className='backgorund-profile'></div>
      <div className="cols__container">
        <div className="left__col">
          <div className="img__container">
            {user ?
              <div className='urser-true'>
                <Image src={userImg} alt="Anna Smith" width={150} height={150} />
              </div>
              :
              <div className='user-false'>
                <User strokeWidth={1.25} />
              </div>
            }
            <span></span>
          </div>
          <div className='profile-information__container'>
            <div className='name__conatiner'>
              <p className='name'>Juan Jose Hernandez Guzman</p>
            </div>
            <div className='btn__edit_container'>
              <Link href='/user/edit' className='btn__general-purple'>Editar perfil</Link>
            </div>
            <div className='skills__contaiiner'>
              <p>Plomero</p>
              <p>Electicista</p>
            </div>
            <div className='description'>
              <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
                  erat volutpat. Morbi imperdiet
                </p>
            </div>
            <ul className="about">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
                Calificaciones
              </li>
              <li>
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" /></svg>
                Trabajos
                </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-message"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" /></svg>
                Enviar mensaje
              </li>
            </ul>
            <div></div>

            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
                erat volutpat. Morbi imperdiet, mauris ac auctor dictum, nisl
                ligula egestas nulla.
              </p>

              <ul>
                <li><i className="fab fa-twitter"></i></li>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-dribbble"></i>
              </ul>
            </div>
          </div>
        </div>
        <div className="right__col">
          <nav>
            <ul>
              <li><a href="">Trabajos</a></li>
              <li><a href="">Fotos</a></li>
            </ul>
            <button>Follow</button>
          </nav>
          {/* <div className="photos">
            <Image src={img1} alt="Photo" width={100} height={100} />
            <Image src={img2} alt="Photo" width={100} height={100} />
            <Image src={img3} alt="Photo" width={100} height={100} />
            <Image src={img4} alt="Photo" width={100} height={100} />
            <Image src={img5} alt="Photo" width={100} height={100} />
            <Image src={img6} alt="Photo" width={100} height={100} />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Profile
