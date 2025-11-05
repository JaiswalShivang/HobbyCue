import React, { useState } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg bg-white" style={{ padding: '10px 0', minHeight: '80px', borderBottom: '1px solid #e0e0e0' }}>
      <div className="container-fluid px-3 px-sm-4">
        <div className="d-flex align-items-center justify-content-between w-100 flex-wrap flex-lg-nowrap">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="HobbyCue Logo" style={{ height: 'clamp(40px, 8vw, 60px)', width: 'auto' }} />
          </a>

          <div className="d-flex align-items-center gap-2 d-lg-none order-3 order-sm-3">
            <button className="btn btn-light p-2" style={{ border: 'none', background: 'transparent', fontSize: '20px', color: '#8064A2' }}>
              <i className="bi bi-search"></i>
            </button>
            <button className="btn btn-light p-2" style={{ border: 'none', background: 'transparent', fontSize: '20px', color: '#8064A2' }}>
              <i className="bi bi-bell-fill"></i>
            </button>
            <button 
              className="navbar-toggler p-2" 
              type="button" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ border: 'none', color: '#8064A2', fontSize: '24px' }}
            >
              <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
            </button>
          </div>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} order-4 order-lg-2`} id="navbarContent">
            <div className="d-none d-lg-block mx-auto" style={{ maxWidth: '300px', width: '100%' }}>
              <div className="d-flex">
                <input 
                  type="text" 
                  className="form-control bg-light" 
                  style={{ 
                    height: '40px', 
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: '8px',
                    borderTopRightRadius: '0',
                    borderBottomRightRadius: '0',
                    border: '1px solid #ccc', 
                    borderRight: 'none',
                    fontFamily: 'Poppins', 
                    fontWeight: '300', 
                    fontSize: '12px',
                    paddingLeft: '15px'
                  }} 
                  placeholder="Search here..." 
                />
                <button 
                  className="btn d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: '#8064A2',
                    color: '#FFFFFF',
                    border: 'none',
                    borderTopLeftRadius: '0',
                    borderBottomLeftRadius: '0',
                    borderTopRightRadius: '8px',
                    borderBottomRightRadius: '8px',
                    width: '50px',
                    height: '40px',
                    padding: '0'
                  }}
                >
                  <i className="bi bi-search" style={{ fontSize: '18px' }}></i>
                </button>
              </div>
            </div>
            
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 mt-3 mt-lg-0 ms-lg-auto">
              <div className="dropdown w-100 w-lg-auto">
                <button 
                  className="btn btn-light dropdown-toggle d-flex align-items-center justify-content-start w-100" 
                  style={{ border: 'none', background: 'transparent', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500', padding: '8px 0' }} 
                  type="button" 
                  data-bs-toggle="dropdown"
                >
                  <span className="rounded-circle text-white d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px', backgroundColor: '#8064A2', flexShrink: 0 }}>
                    <i className="bi bi-compass"></i>
                  </span>
                  Explore
                </button>
              </div>
              
              <div className="dropdown w-100 w-lg-auto">
                <button 
                  className="btn btn-light dropdown-toggle d-flex align-items-center justify-content-start w-100" 
                  style={{ border: 'none', background: 'transparent', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500', padding: '8px 0' }} 
                  type="button" 
                  data-bs-toggle="dropdown"
                >
                  <span className="rounded-circle text-white d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px', backgroundColor: '#8064A2', flexShrink: 0 }}>
                    <i className="bi bi-star-fill"></i>
                  </span>
                  Hobbies
                </button>
              </div>
              
              <div className="d-none d-lg-flex align-items-center gap-3">
                <button className="btn btn-light p-0" style={{ border: 'none', background: 'transparent', fontSize: '20px', color: '#8064A2' }}>
                  <i className="bi bi-bookmark-fill"></i>
                </button>
                <button className="btn btn-light p-0 position-relative" style={{ border: 'none', background: 'transparent', fontSize: '20px', color: '#8064A2' }}>
                  <i className="bi bi-bell-fill"></i>
                </button>
                <button className="btn btn-light p-0" style={{ border: 'none', background: 'transparent', fontSize: '20px', color: '#8064A2' }}>
                  <i className="bi bi-cart-fill"></i>
                </button>
              </div>
              
              <button className="btn w-100 w-lg-auto mt-2 mt-lg-0" style={{ border: '2px solid #8064A2', borderRadius: '8px', color: '#8064A2', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500', padding: '8px 20px', whiteSpace: 'nowrap' }}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
