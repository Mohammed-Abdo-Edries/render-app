import React from 'react'

function Home() {
  return (
    <div className='home' data-aos="zoom-out-right">
      <div className="container" data-aos="fade-up" data-aos-duration="800">
        <h6 className='first'>Hi👋 my name is</h6>
        <h1 className=''>Mohammed Abdo</h1>
        <h1 className=''>I build web applications</h1>
        <h6 className=''>I'm a full stack developer(mongoose,express,reactjs,nodejs)</h6>
        <div className='about'>
          <div className='title'>About me</div>
          <div className='text'>
            Hello! my name is Mohammed and I'm a motivated full stack <wbr />
            javascript developer experienced in the mern stack, with a <wbr />
            strong desire to build web, mobile applications, learn new
            technology and try new stuff.
          </div>
          <a href="http://" target="_blank" rel="noopener noreferrer" className='resume'>My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Home