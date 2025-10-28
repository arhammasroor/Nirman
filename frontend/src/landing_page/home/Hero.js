import React from 'react';

function Hero() {
  return (
    <div className='row'>
      <div className='col-8'>
        <div id="carouselExampleFade" data-bs-ride="carousel"          // enable auto-slide
          data-bs-interval="5000" class="carousel slide carousel-fade p-5" style={{ marginTop: "-1rem" }}>
          <div class="carousel-inner" style={{ borderRadius: "4px" }}>
            <div class="carousel-item active">
              <img src="media/images/img-4.jpg" class="d-block w-100" alt="..." style={{ height: "400px" }} />
            </div>
            <div class="carousel-item">
              <img src="media/images/arti.jpg" class="d-block w-100" alt="..." style={{ height: "400px" }} />
            </div>
            <div class="carousel-item">
              <img src="media/images/kumb1.jpg" class="d-block w-100" alt="..." style={{ height: "400px" }} />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" >
            <i class="fa fa-chevron-left fs-1" aria-hidden="true"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <i class="fa fa-chevron-right fs-1" aria-hidden="true"></i>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='col-4 text-muted' style={{marginTop:"5rem"}}>
        <h1 className='fs-1'>NIRMAN-The New <span style={{ color: "orange" }}>In</span><span style={{ color: "#00cc44" }}>dia</span></h1>
        <p
  className="fs-5"
  style={{
    marginTop: "2rem",
    lineHeight: "1.7",
    textAlign: "justify",
    color: "#333",
    paddingRight:"3rem"
  }}
>
  We are the modern municipal service platform designed to make your voice heard.  
  From potholes and streetlights to sanitation and water supply — register your civic
  complaints easily and get real-time updates until they’re resolved.  
  We aim to create cleaner, safer, and better-managed cities — powered by the people of India.
</p>


      </div>

    </div>

  );
}

export default Hero;