import React from 'react'
import { Link } from 'react-router-dom'
import add from "../assets/add.svg"

const AddYourOwn = () => {
  return (
    <section style={{ backgroundColor: '#F7FDFF', padding: 'clamp(40px, 8vw, 60px) 0' }}>
      <div className="container-fluid" style={{ paddingLeft: 'clamp(16px, 7vw, 100px)', paddingRight: 'clamp(16px, 7vw, 100px)' }}>
        <div className="card border" style={{ borderRadius: '8px', padding: 'clamp(20px, 4vw, 40px)', borderColor: '#CED4DA', backgroundColor: '#FFFFFF' }}>
          <div className="d-flex align-items-center mb-3 gap-3 gap-md-4">
            <img src={add} alt="Add" style={{ width: '40px', height: '40px', flexShrink: 0 }} />
            <h3 style={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: '600', lineHeight: '100%', letterSpacing: '0%', color: '#000', marginBottom: '0' }}>
              Add your own
            </h3>
          </div>
          <p style={{ fontFamily: 'Poppins', fontSize: 'clamp(14px, 3vw, 17px)', fontWeight: '300', lineHeight: '1.5', letterSpacing: '0%', color: '#000', marginBottom: 'clamp(20px, 4vw, 30px)' }}>
            Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
          </p>
          <Link to="/add" className="btn" style={{ border: '1px solid #8064A2', borderRadius: '8px', color: '#8064A2', backgroundColor: '#FFFFFF', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500', padding: '10px 20px', width: 'fit-content', textDecoration: 'none' }}>
            Add new
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AddYourOwn
