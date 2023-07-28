import React from 'react'


const Portfolio = (props) => {
    return (

        <div class="col-12 col-md-12 col-lg-4">
            <div class="card text-light text-center bg-white pb-2">
                <div class="card-body text-dark">
                    <div class="img-area mb-4">
                        <img src={props.imgsrc} alt="...." class="img-fluid" />
                    </div>
                    <h3 class="card-title">{props.title}</h3>
                    <p class="lead">{props.text} </p>
                    <button class="btn bg-warning text-dark">Learn More</button>
                </div>
            </div>

        </div>
    )
}

export default Portfolio