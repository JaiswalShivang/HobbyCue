import React from 'react'
import group2 from "../assets/Group2.png"

const Community = () => {
  return (
    <section style={{ backgroundColor: '#F7F5F9', padding: 'clamp(40px, 8vw, 80px) 0' }}>
      <div className="container-fluid" style={{ paddingLeft: 'clamp(16px, 7vw, 100px)', paddingRight: 'clamp(16px, 7vw, 100px)' }}>
        <div className="mb-4">
          <h2 style={{ fontFamily: 'Poppins', fontSize: 'clamp(24px, 6vw, 36px)', fontWeight: '400', marginBottom: 'clamp(20px, 4vw, 30px)', fontStyle: 'italic' }}>
            Your <span style={{ color: '#8064A2' }}>Hobby</span>, Your <span style={{ color: '#0096C8'}}>Community...</span>
          </h2>
          <button className="btn" style={{ backgroundColor: '#8064A2', color: '#FFFFFF', borderRadius: '8px', padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 30px)', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '600', border: 'none' }}>
            Get started
          </button>
        </div>
        <div className="text-center mt-4 mt-md-5">
          <img src={group2} alt="Community" className="img-fluid" style={{ maxWidth: '100%' }} />
        </div>

      </div>
    </section>
  )
}

export default Community
