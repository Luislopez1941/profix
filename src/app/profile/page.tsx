import React from 'react'
import './Profile.css'
import Image from 'next/image'
import userImg from '../../assets/img/user.jpeg'
import img1 from '../../assets/img/img_1.avif'
import img2 from '../../assets/img/img_2.avif'
import img3 from '../../assets/img/img_3.avif'
import img4 from '../../assets/img/img_4.avif'
import img5 from '../../assets/img/img_5.avif'
import img6 from '../../assets/img/img_6.avif'

const Profile = () => {
  return (
    <div className="header__wrapper">
      <header></header>
      <div className="cols__container">
        <div className="left__col">
          <div className="img__container">
          <Image src={userImg} alt="Anna Smith" width={150} height={150} />
          
            <span></span>
          </div>
          <h2>Anna Smith</h2>
          <p>UX/UI Designer</p>
          <p>anna@example.com</p>

          <ul className="about">
            <li><span>4,073</span>Followers</li>
            <li><span>322</span>Following</li>
            <li><span>200,543</span>Attraction</li>
          </ul>

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
        <div className="right__col">
          <nav>
            <ul>
              <li><a href="">photos</a></li>
              <li><a href="">galleries</a></li>
              <li><a href="">groups</a></li>
              <li><a href="">about</a></li>
            </ul>
            <button>Follow</button>
          </nav>

          <div className="photos">
            <Image src={img1} alt="Photo" width={100} height={100} />
            <Image src={img2} alt="Photo" width={100} height={100} />
            <Image src={img3} alt="Photo" width={100} height={100} />
            <Image src={img4} alt="Photo" width={100} height={100} />
            <Image src={img5} alt="Photo" width={100} height={100} />
            <Image src={img6} alt="Photo" width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
