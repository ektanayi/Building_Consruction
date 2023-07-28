import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Team = (props) => {
  return (
    <div class="col-12 col-md-6 col-lg-3">
        <div class="card text-center">
          <div class="card-body">
            <img src={props.imgsrc} alt="" id="team-img" class="img-team img-fluid rounded-circle"/>
            <h3 class="card-title py-2">{props.title}</h3>
            <p class="card-text">{props.text}</p>
          
            <p class="socials">
              <i class="bi bi-twitter text-dark mx-1"></i>
              <i class="bi bi-facebook text-dark mx-1"></i>
              <i class="bi bi-linkedin text-dark mx-1"></i>
              <i class="bi bi-instagram text-dark mx-1"></i>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Team