import React from "react";


const ServicesCard = (props) => {
    return(
    <>
          <div class="col-12 col-md-12 col-lg-4">
                <div class="card text-white text-center bg-dark pb-2">
                    <div class="card-body">
                        <i class="bi bi-back"></i>
                        <h4 class="card-title">{props.title}</h4>
                        <p class="lead">{props.text}</p>
                        <button class="btn btn-warning text-dark">Read more</button>
                    </div>
                </div>
            </div>
    </>
    );
}

export default ServicesCard;