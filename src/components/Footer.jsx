import React from 'react'

const Footer = () => {
  const hobbycueLinks = [
    'About Us',
    'Our Services',
    'Work with Us',
    'FAQ',
    'Contact Us'
  ]

  const howDoILinks = [
    'Sign Up',
    'Add a Listing',
    'Claim Listing',
    'Post a Query',
    'Add a Blog Post',
    'Other Queries'
  ]

  const quickLinks = [
    'Listings',
    'Blog Posts',
    'Shop / Store',
    'Community'
  ]

  const socialIcons = [
    { icon: 'bi-facebook'},
    { icon: 'bi-twitter'},
    { icon: 'bi-instagram'},
    { icon: 'bi-pinterest'},
    { icon: 'bi-google'},
    { icon: 'bi-youtube'},
    { icon: 'bi-telegram'},
    { icon: 'bi-envelope'}
  ]

  return (
    <footer style={{ paddingTop: 'clamp(40px, 8vw, 60px)', paddingBottom: '20px', backgroundColor: '#FFFFFF' }}>
      <div className="container-fluid" style={{ paddingLeft: 'clamp(16px, 7vw, 100px)', paddingRight: 'clamp(16px, 7vw, 100px)' }}>
        <div className="row g-4 g-md-5">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '700', marginBottom: '0', color: '#000' }}>Hobbycue</h5>
              <button
                className="btn d-lg-none p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#hobbycueLinks"
                aria-expanded="true"
                aria-controls="hobbycueLinks"
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <i className="bi bi-chevron-up" style={{ fontSize: '18px', color: '#000' }}></i>
              </button>
            </div>
            <div className="collapse show d-lg-block" id="hobbycueLinks">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {hobbycueLinks.map((link, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '400', color: '#6D747A', textDecoration: 'none' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '700', marginBottom: '0', color: '#000' }}>How Do I</h5>
              <button
                className="btn d-lg-none p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#howDoILinks"
                aria-expanded="true"
                aria-controls="howDoILinks"
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <i className="bi bi-chevron-up" style={{ fontSize: '18px', color: '#000' }}></i>
              </button>
            </div>
            <div className="collapse show d-lg-block" id="howDoILinks">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {howDoILinks.map((link, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '400', color: '#6D747A', textDecoration: 'none' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '700', marginBottom: '0', color: '#000' }}>Quick Links</h5>
              <button
                className="btn d-lg-none p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#quickLinks"
                aria-expanded="true"
                aria-controls="quickLinks"
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <i className="bi bi-chevron-up" style={{ fontSize: '18px', color: '#000' }}></i>
              </button>
            </div>
            <div className="collapse show d-lg-block" id="quickLinks">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {quickLinks.map((link, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '400', color: '#6D747A', textDecoration: 'none' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '700', marginBottom: '20px', color: '#000' }}>Social Media</h5>
            <div className="d-flex flex-wrap mb-4" style={{ gap: '15px' }}>
              {socialIcons.map((social, index) => (
                <a key={index} href="#" className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#F7F5F9', border: '1px solid #CED4DA', textDecoration: 'none' }}>
                  <i className={social.icon} style={{ color: '#B8B8B8', fontSize: '18px' }}></i>
                </a>
              ))}
            </div>
            <h5 style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '700', marginBottom: '15px', marginTop: 'clamp(20px, 4vw, 30px)', color: '#000' }}>Invite Friends</h5>
            <div className="d-flex flex-column flex-sm-row" style={{ gap: '10px' }}>
              <input type="email" placeholder="Email ID" className="form-control" style={{ border: '1px solid #CED4DA', borderRadius: '8px', padding: '10px', fontFamily: 'Poppins', fontSize: '12px', flex: 1 }} />
              <button className="btn" style={{ backgroundColor: '#8064A2', color: '#FFFFFF', borderRadius: '8px', padding: '10px 20px', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '600', border: 'none', whiteSpace: 'nowrap' }}>
                Invite
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 mt-md-5 p-3 p-md-4" style={{ borderTop: '1px solid #CED4DA', backgroundColor: '#F7F5F9' }}>
        <p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '400', color: '#000', margin: 0 }}>
          © Purple Cues Private Limited
        </p>
      </div>
    </footer>
  )
}

export default Footer
