import React, { useState, useEffect } from "react";
import axios from "axios";
import kstyles from "./ku.module.css";
import ku2 from "../images/ku2.jpg";
import ku3 from "../images/ku3.jpg";
import ku4 from "../images/ku4.jpg";
import ku_logo from "../images/ku_logo.jpg";
import eve1 from "../images/kashi_utsav .png";
import seb from "../images/seb.jpeg";
import sang from "../images/sang.jpeg";
import Type from "./Typeku";
import { AiFillInstagram, AiFillLinkedin, AiFillMail, } from "react-icons/ai";

const Ku = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/postholders/ku', {
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

  const events = [
    { name: "Kashi Utshv", img: eve1, text: " Kashi Utsav was a transformative cultural fest for Basti's students. It encouraged students to compete, cultivating physical, intellectual, emotional, and social qualities. This holistic approach aimed to introduce youngsters to diverse interests and talents." },
    { name: "Sangharsh", img: sang, text: " An Inter-Basti Sports Event' with an aim to nurture sportsmanship values, offer a platform for showcasing talent, introduce kids to diverse games, and promote awareness about the significance of physical activities in daily routines" },
    { name: "Sangyaan", img: seb, text: "'Sangyaan' is an inter-basti science exhibition. The event featured an array of meticulously crafted models, each operating on sound scientific principles, captivating the audience." },
  ];
  return (
    <div className={kstyles.bodies}>

      <div className={`${kstyles.carousel_container} `}>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={ku2} class={kstyles.carousel_img} alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ku3} class={kstyles.carousel_img} alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ku4} class={kstyles.carousel_img} alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      <div className={kstyles.club_header}>
        <h2 className={kstyles.club_name}>Kashi Utkarsh </h2>
        <div className={kstyles.type}>
          {" "}<Type />{" "}
        </div>
      </div>

      <div className={`${kstyles.about} ${kstyles.container}`}>
        <img src={ku_logo} alt="" />
        <div className={kstyles.aboutContent}>
          <h3>About Us</h3>
          <p className={kstyles.dis}>
            Kashi Utkarsh, is an initiative led by the IIT BHU students to
            relieve the challenges faced by underprivileged individuals in areas
            like Patiya, Kakarmatta, and Lahartara. Centered on improved hygiene
            and importance of education, the initiative aims to enhance the
            standard of living and awareness among the less fortunate. Through
            individual engagement, free medical camps, and awareness
            campaigns,we strive to address their unique needs and nurture
            positive transformation within these communities.
          </p>
          <button className={`${kstyles.btn} ${kstyles.btnSecondary}`}>
            Join US
          </button>
        </div>
      </div>

      <div className={kstyles.eventsBack}></div>
      <div className={`${kstyles.events} ${kstyles.container}`}>
        <h2>Events & Activities</h2>

        {events.map((event, index) => (
          <div className={kstyles.event}>
            <div className={kstyles.eventContent}>
              <h3>{event.name}</h3>
              <p>{event.text}</p>
              <div className="home-btn">
                <a href="/About" className="home-getStartBtn" style={{ color: "#fff" }} >
                  Know More
                </a>
              </div>
            </div>
            <img className={kstyles.img_ani} src={event.img} alt="" />
            <div className={kstyles.date}></div>

          </div>
        ))}
      </div>

      <div className={kstyles.home_container}>
          <h1 className={kstyles.heading}> Meet Our Team </h1>
          <div className={kstyles.row}>
            {team.map((member, index) => (
              <div className={kstyles.profile_card} key={index}>
                <div className={kstyles.img}>
                <img src={`http://localhost:5000/${member.image}`} alt={member.name} />
                </div>
                <div className={kstyles.caption}>
                  <h3>{member.name}</h3>
                  <p>{member.post}</p>
                  <div class={kstyles.homePage_icons}>
                    <div class={kstyles.social_icons}>
                      <a href={member.instaLink}><AiFillInstagram /></a>
                    </div>
                    <div class={kstyles.social_icons}>
                      <a href={member.facebookLink}><AiFillMail /></a>
                    </div>
                    <div class={kstyles.social_icons}>
                      <a href={member.linkdinLink}><AiFillLinkedin /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}



          </div>

        </div>
    </div>
  );
};

export default Ku;
