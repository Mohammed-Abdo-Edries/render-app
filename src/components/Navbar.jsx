import React,{ useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <BrowserRouter>
    <nav className='navbar p-2 sticky-top'>
      <div className="container d-flex">
        <div className='logo'>PORTFOLIO</div>
        <ul className='list d-none d-sm-flex ms-auto m-0 list-unstyled'>
          <li className="nav-item">
              <Link to="#skills" className='link text-decoration-none me-3' smoth>MY SKILLS</Link> 
          </li>
          <li className="nav-item">
              <Link to="#projects" className='link text-decoration-none me-3' smoth>PROJECTS</Link> 
          </li>
          <li className="nav-item">
            <Link to="#contact" className='link text-decoration-none' smoth>CONTACT ME</Link>
          </li>
        </ul>
        <button className='d-block d-sm-none ms-auto open' type="button" onClick={() => setShowNavbar(true)}>
        <i class="fa-solid fa-bars"></i>
        </button>
        {showNavbar && (
        <div className="overlay" data-aos="slide-left" data-aos-duration="500">
          <button className='close ms-auto' type="button" onClick={() => setShowNavbar(false)}>
            <i class="fa-solid fa-xmark"></i>
          </button>
          <ul className='list list-unstyled'>
            <li className="p-4 m-4 mb-3 fs-3" data-aos="slide-left" data-aos-duration="1000" onClick={() => setShowNavbar(false)}>
              <Link to="#skills" className='link text-decoration-none' smoth>MY SKILLS</Link> 
            </li>
            <li className="p-4 m-4 mb-3 fs-3" data-aos="slide-left" data-aos-duration="1000" onClick={() => setShowNavbar(false)}>
              <Link to="#projects" className='link text-decoration-none' smoth>PROJECTS</Link> 
            </li>
            <li className="p-4 m-4 mb-3 fs-3" data-aos="slide-left" data-aos-duration="1000" onClick={() => setShowNavbar(false)}>
              <Link to="#contact" className='link text-decoration-none' smoth>CONTACT ME</Link>
            </li>
          </ul>
        </div>
        )}
      </div>
    </nav>
    </BrowserRouter>
  )
}

export default Navbar