import React from 'react'
import femaleImage from "../assets/female.png"
import testimonials from "../assets/testimonials.svg"

const Testimonials = () => {
  return (
    <section style={{ backgroundColor: '#F7F5F9', padding: 'clamp(40px, 8vw, 60px) 0' }}>
      <div className="container-fluid" style={{ paddingLeft: 'clamp(16px, 7vw, 100px)', paddingRight: 'clamp(16px, 7vw, 100px)' }}>
        <div className="card border" style={{ borderRadius: '8px', padding: 'clamp(20px, 4vw, 30px)', borderColor: '#CED4DA', backgroundColor: '#FFFFFF' }}>
          <div className="d-flex align-items-center gap-3 mb-4">
            <img src={testimonials} alt="testimonals" style={{ width: '40px', height: '40px', flexShrink: 0 }} />
            <h3 style={{ fontFamily: 'Poppins', fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: '600', lineHeight: '1.2', letterSpacing: '0%', color: '#000', marginBottom: '0' }}>
              Testimonials
            </h3>
          </div>
          <p style={{ fontFamily: 'Poppins', fontSize: 'clamp(14px, 3vw, 18px)', fontWeight: '300', lineHeight: '1.8', letterSpacing: '0%', color: '#6D747A', marginBottom: 'clamp(20px, 4vw, 30px)' }}>
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and i highly recommend it.
          </p>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
            <div style={{ backgroundColor: '#CCC1D2', borderRadius: '8px', padding: 'clamp(15px, 3vw, 20px)', width: '100%', maxWidth: '560px', display: 'flex', alignItems: 'center', gap: 'clamp(10px, 2vw, 15px)' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#FFFFFF', color: '#8064A2', fontSize: '20px', flexShrink: 0 }}>
                ▶
              </div>
              <div style={{ flex: 1, height: '4px', backgroundColor: '#8064A2', borderRadius: '2px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', backgroundColor: '#8064A2', borderRadius: '50%' }}></div>
              </div>
              <span style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#000', flexShrink: 0 }}>0:00</span>
              <div className="rounded-circle" style={{ width: '60px', height: '60px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={femaleImage} alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="text-center text-md-end">
              <div className="d-flex align-items-center justify-content-center justify-content-md-end mb-2">
                <div className="rounded-circle" style={{ width: '80px', height: '80px', overflow: 'hidden', border: '3px solid #8064A2' }}>
                  <img src={femaleImage} alt="Shubha Nagarajan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <h4 style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '600', color: '#8064A2', marginBottom: '5px' }}>
                Shubha Nagarajan
              </h4>
              <p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '400', color: '#0096C8', margin: '0' }}>
                Classical Dancer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
