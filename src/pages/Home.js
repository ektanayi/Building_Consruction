import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom'
import web from '../images/img15.jpg';
import './Home.css'
import ServicesCard from '../components/ServicesCard';
import ServicesCarddata from '../components/ServicesCarddata';
import Portfolio from '../components/Portfolio';
import Portfoliodata from '../components/Portfoliodata';
import Team from '../components/Team';
import Teamdata from '../components/Teamdata';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../components/Slider';
import slides from '../components/mock.json';


const Home = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="#"><span className="text-warning">Build</span>Con</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
                    </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 active">
              <li className="nav-item ">
                <HashLink className="nav-link" to={"/page#"}>Home</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to={"/page#about"}>About</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to={"/page#services"}>Services</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to={"/page#portfolio"}>Portfolio</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to={"/page#team"}>Team</HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to={"/page#contact"}>Contact</HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Slider slides={slides}/>



      <section id="about" class="about-section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-12">
              <div class="about-img">
                <img src={web} alt="" class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div class="about-text">
                <h2>We Provide Best Quality <br /> Services Ever</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, in eius fugit repellendus cumque esse. Impedit quis eveniet magnam saepe quidem maxime sapiente voluptas fugit fuga optio nemo culpa perspiciatis at delectus aliquam accusantium excepturi inventore debitis rerum temporibus, porro ut ullam hic tempore. Eos repudiandae quam ullam dolorem amet.</p>
                <a href="#" class="btn btn-warning">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="services" class="services about-section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-header text-center pb-5">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Nisi totam sed ex?</p>
              </div>
            </div>
          </div>

          <div class="row">
            {
              ServicesCarddata.map((val, ind) => {
                return <ServicesCard
                  imgsrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                />
              })
            }
          </div>
        </div>
      </section>



      <section id="portfolio" class="portfolio about-section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-header text-center pb-5">
                <h2>Our Projects</h2>
                <p>Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Nisi totam sed ex?</p>
              </div>
            </div>
          </div>
          <div class="row">
            {
              Portfoliodata.map((val, ind) => {
                return <Portfolio
                  imgsrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                />
              })
            }
          </div>
        </div>
      </section>




      <section id="team" class="team about-section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-header text-center pb-5">
                <h2>Our Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Nisi totam sed ex?</p>
              </div>
            </div>
          </div>
          <div class="row">
            {
              Teamdata.map((val, ind) => {
                return <Team
                  imgsrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                />
              })
            }
          </div>
        </div>
      </section>



      <section id="contact" class="contact about-section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-header text-center pb-5">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Nisi totam sed ex?</p>
              </div>
            </div>
          </div>

          <div class="row m-0">
            <div class="col-md-12 p-0 pt-4 pb-4">
              <form action="#" class="bg-light p-4 m-auto">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <input type="text" class="form-control" required placeholder="Your full name..." />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <input type="email" class="form-control" required placeholder="Your Email name..." />
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="mb-3">
                      <textarea class="form-control" id="textAreaExample1" rows="4" placeholder="Your Query Hear..." />
                    </div>

                    <button class="btn btn-warning btn-block mt-3">Send Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>





      <footer class="bg-dark p-2 text-center">
        <div class="container">
          <p class="text-white">All Right Reserved @build1212@googal.com</p>
        </div>
      </footer>


    </div>
  )
}

export default Home