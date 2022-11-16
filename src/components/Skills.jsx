import React from 'react'

function Skills() {
  return (
    <div className='skills' id="skills">
      <div className="container">
        <div className='skills-title' data-aos="slide-right" data-aos-duration="800">
        My Skills
        </div>
        <div className='mb-5' data-aos="zoom-out-right">some of the technologies and tools i know👇</div>
        <div className="row text-center">
          <div className="col-sm-6 col-md-4 col-lg-4 squar" data-aos="fade-up" data-aos-duration="800">
            <i className="fa-brands fa-react icon"></i>
            <div className="name">reactjs</div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 squar" data-aos="fade-up" data-aos-duration="800">
            <i className="fa-brands fa-node icon"></i>
            <div className="name">nodejs</div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 squar" data-aos="fade-up" data-aos-duration="1000">
            <i className="fa-brands fa-square-js icon"></i>
            <div className="name">Javascript</div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 squar" data-aos="fade-up" data-aos-duration="1000">
            <i className="fa-brands fa-html5 icon"></i>
            <div className="name">html5</div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 squar" data-aos="fade-up" data-aos-duration="1000">
            <i className="fa-brands fa-css3-alt icon"></i>
            <div className="name">css3</div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 squar" data-aos="fade-up" data-aos-duration="1000">
            <i className="fa-brands fa-bootstrap icon"></i>
            <div className="name">bootstrap</div>
          </div>
          {/* <div className="col-sm-6 col-md-4 col-lg-4" data-aos="slide-up" data-aos-duration="1000">
          <i className="fa-brands fa-bootstrap icon"></i>
            <div className="name">express</div>
          </div> */}
          <div className="col-sm-12 col-md-12 col-lg-12 squar" data-aos="fade-up" data-aos-duration="1000">
            <i className="fa-solid fa-mobile-screen-button icon"></i>
            <div className="name">responsive web design</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills