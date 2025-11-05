import React, { useState } from 'react'
import peopleIcon from '../assets/people.svg'
import placeIcon from '../assets/place.svg'
import productIcon from '../assets/product.svg'
import programIcon from '../assets/program.svg'

const AddListing = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const addListingData = [
    {
      icon: peopleIcon,
      title: 'People',
      description: 'An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association.',
      borderColor: '#8064A2',
      hoverColor: '#8064A2'
    },
    {
      icon: placeIcon,
      title: 'Place',
      description: 'An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.',
      borderColor: '#77933C',
      hoverColor: '#77933C'
    },
    {
      icon: productIcon,
      title: 'Product',
      description: 'An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.',
      borderColor: '#C0504D',
      hoverColor: '#C0504D'
    },
    {
      icon: programIcon,
      title: 'Program',
      description: 'An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.',
      borderColor: '#0096C8',
      hoverColor: '#0096C8'
    }
  ]

  return (
    <section style={{ backgroundColor: '#F7F5F9', padding: 'clamp(20px, 4vw, 40px)', minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container-fluid" style={{ maxWidth: '1200px', backgroundColor: 'white', borderRadius: '8px', padding: 'clamp(20px, 4vw, 40px)' }}>
        <div className="text-center mb-4 mb-md-5">
          <div className="d-flex align-items-center justify-content-center mb-3 flex-wrap gap-2">
            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#0096C8', color: '#FFFFFF', fontSize: '24px', flexShrink: 0 }}>
              +
            </div>
            <h2 style={{ fontFamily: 'Poppins', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: '700', color: '#000', margin: 0 }}>
              Add Your Listing
            </h2>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {addListingData.map((type, index) => (
            <div className="col-12 col-md-6" key={index}>
              <div 
                className="card h-100" 
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  border: `2px solid ${type.borderColor}`, 
                  borderRadius: '8px', 
                  padding: 'clamp(20px, 4vw, 30px)', 
                  backgroundColor: hoveredIndex === index ? type.hoverColor : '#FFFFFF',
                  cursor: 'pointer', 
                  transition: 'all 0.3s'
                }}
              >
                <div className="d-flex align-items-start mb-3">
                  <img src={type.icon} alt={type.title} style={{ width: '40px', height: '40px', marginRight: '15px', flexShrink: 0, filter: hoveredIndex === index ? 'brightness(0) invert(1)' : 'none' }} />
                  <h3 style={{ fontFamily: 'Poppins', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: '600', lineHeight: '1.2', letterSpacing: '0%', color: hoveredIndex === index ? '#FFFFFF' : '#000', marginBottom: '0' }}>
                    {type.title}
                  </h3>
                </div>
                <p style={{ fontFamily: 'Poppins', fontSize: 'clamp(12px, 2.5vw, 14px)', fontWeight: '400', lineHeight: '1.6', color: hoveredIndex === index ? '#FFFFFF' : '#000', marginBottom: '0' }}>
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AddListing
