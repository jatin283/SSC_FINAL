import React, { useState, useEffect } from "react";
import axios from "axios";
import sstyles from './sahyog.module.css'
import header from '../images/header_background.JPG'
import sahyog2 from '../images/sahyog2.jpg'
import sahyog3 from '../images/sahyog3.jpg'
import sahtog4 from '../images/sahyog1.jpg'
import sahyog from '../images/sahyog_logo.jpg'
import ssd from '../images/ssd.jpeg'
import sdu from '../images/sdu.jpeg'
import Type from './Typesahyog'
import { AiFillInstagram, AiFillLinkedin, AiFillMail} from "react-icons/ai";
const Sahyog = () => {
  const [team, setTeam] = useState([]);
 // const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/postholders/sahyog', {
        headers: {
          'authorization': localStorage.getItem('token')
        }
      });
      setTeam(res.data);
      // Assuming you have a separate endpoint or way to get events data
      
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
 
  return (
    <>
      <div className={`${sstyles.carousel_container} `}>
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={sahyog2} class={sstyles.carousel_img} alt="..." />
            </div>
            <div class="carousel-item">
              <img src={sahyog3} class={sstyles.carousel_img} alt="..." />
            </div>
            <div class="carousel-item">
              <img src={sahtog4} class={sstyles.carousel_img} alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className={sstyles.club_header}>
        <h2 className={sstyles.club_name}>Sahyog</h2>
        <div className={sstyles.type}>
                {" "}<Type/>{" "}
              </div>
      </div>

      
      <div className={`${sstyles.about} ${sstyles.container}`}>
        <img src={sahyog} alt="" />
        <div className={sstyles.aboutContent}>
          <h3>About Us</h3>
          <p className={sstyles.dis}>
            The Sahyog Club, a fundamental component of the Social Service
            Council at IIT (BHU) Varanasi, is dedicated in extending support to
            the marginalized and underprivileged segments of our community. Our
            primary objective is to uplift these sections by fostering knowledge
            and mutual empowerment, thus brightening the lives that have long
            been shrouded in darkness.
          </p>

          <button className={`${sstyles.btn} ${sstyles.btnSecondary}`}>
            Join Us
          </button>
        </div>
      </div>

      <div className={sstyles.eventsBack}></div>
      <div className={`${sstyles.events} ${sstyles.container}`}>
        <h2> Events & Activities</h2>
        <div className={sstyles.event}>
          <div className={sstyles.eventContent}>
            <h3>Gram Mela</h3>
            <p>
              'Sangharsh: An Inter-Basti Sports Event' was organized on 15th
              January 2023 inKakarmatta Basti by Kashi Utkarsh, affiliated with
              IIT BHU.
            </p>
            <div className="home-btn">
                <a href="/About" className="home-getStartBtn" style={{ color: "#fff" }} >
                  Know More
                </a>
              </div>
          </div>
          <img className={sstyles.img_ani} src={header} alt="" />
          <div className={sstyles.date}></div>
        </div>
        <div className={sstyles.event}>
          <div className={sstyles.eventContent}>
            <h3>Daan Utshv</h3>
            <p className={sstyles.dis}>
              It is formerly known as 'The Joy of Giving Week.' Observed from
              the 2nd to the 8th of October in India, Daan Utsav holds a special
              place on the calendar. Simultaneously, "The Joy of Giving Week
              (JGW)" unfolds as a significant "festival of philanthropy"
              spanning a week, with the intention of seamlessly weaving itself
              into the cultural fabric of India.
            </p>
            <div className="home-btn">
                <a href="/About" className="home-getStartBtn" style={{ color: "#fff" }} >
                  Know More
                </a>
              </div>
          </div>
          <img className={sstyles.img_ani}  src={sdu} alt="" />
          <div className={sstyles.date}></div>
        </div>
        <div className={sstyles.event}>
          <div className={sstyles.eventContent}>
            <h3>Sports Day</h3>
            <p className={sstyles.dis}>
              {" "}
              Celebrated on Major Dhyan Chand's birthday (August 27th) in the
              school playgrounds. Engaged students in a wide range of indoor and
              outdoor games, promoting physical fitness, teamwork, and
              sportsmanship. .The event created a lively and energetic
              atmosphere, fostering active participation and promoting the
              values of sportsmanship and physical well-being.
            </p>
            <div className="home-btn">
                <a href="/About" className="home-getStartBtn" style={{ color: "#fff" }} >
                  Know More
                </a>
              </div>
          </div>
          <img className={sstyles.img_ani} src={ssd} alt="" />
          <div className={sstyles.date}></div>
        </div>
      </div>

      <div className={sstyles.home_container}>
        <h1 className={sstyles.heading}> Meet Our Team </h1>

        <div className={sstyles.row}>
            {team.map((member, index) => (
                     <div className={sstyles.profile_card} key={index}>
                     <div className={sstyles.img}>
                     <img src={`http://localhost:5000/${member.image}`} alt={member.name} />
                     </div>
                     <div className={sstyles.caption}>
                         <h3>{member.name}</h3>
                         <p>{member.post}</p>
                         <div class={sstyles.homePage_icons}>
                           <div class={sstyles.social_icons}>
                             <a href={member.instaLink}><AiFillInstagram/></a>
                           </div>
                           <div class={sstyles.social_icons}>
                             <a href={member.facebookLink}><AiFillMail/></a>
                           </div>
                           <div class={sstyles.social_icons}>
                             <a href={member.linkdinLink}><AiFillLinkedin/></a>
                           </div>
                        </div>
                     </div>
                    </div>
            ))}
           </div>
  
      </div>
    </>
  );
}
export default Sahyog

