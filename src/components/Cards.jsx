import React from 'react'
import peopleIcon from '../assets/people.svg'
import placeIcon from '../assets/place.svg'
import productIcon from '../assets/product.svg'
import programIcon from '../assets/program.svg'

const Cards = () => {
  const cardData = [
    {
      icon: peopleIcon,
      title: 'People',
      description: 'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.',
      buttonText: 'Connect',
      borderColor: '#8064A2'
    },
    {
      icon: placeIcon,
      title: 'Place',
      description: 'Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.',
      buttonText: 'Meet up',
      borderColor: '#8064A2'
    },
    {
      icon: productIcon,
      title: 'Product',
      description: 'Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.',
      buttonText: 'Get it',
      borderColor: '#8064A2'
    },
    {
      icon: programIcon,
      title: 'Program',
      description: 'Find events, meetups and workshops related to your hobby.  Register or buy tickets online.',
      buttonText: 'Attend',
      borderColor: '#8064A2'
    }
  ]

  return (
    <section style={{ backgroundColor: '#FFFFFF', paddingTop: 'clamp(40px, 8vw, 100px)', paddingBottom: '40px' }}>
      <div className="container-fluid" style={{ paddingLeft: 'clamp(16px, 7vw, 100px)', paddingRight: 'clamp(16px, 7vw, 100px)', maxWidth: '1440px' }}>
        <div className="row g-3 g-lg-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-12 col-lg-6">
              <div className="card border" style={{ borderRadius: '8px', padding: 'clamp(20px, 4vw, 30px)', height: '100%', borderColor: '#CED4DA', backgroundColor: '#FFFFFF' }}>
                <div className="d-flex align-items-start mb-3">
                  <img src={card.icon} alt={card.title} style={{ width: '40px', height: '40px', marginRight: '20px', flexShrink: 0 }} />
                  <h3 style={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: '600', lineHeight: '100%', letterSpacing: '0%', color: '#000', marginBottom: '40px' }}>{card.title}</h3>
                </div>
                <p style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '300', lineHeight: '100%', letterSpacing: '0%', color: '#000', marginBottom: '40px'}}>
                  {card.description}
                </p>
                <button className="btn" style={{ border: `1px solid ${card.borderColor}`, borderRadius: '8px', color: card.borderColor, backgroundColor: '#FFFFFF', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500', padding: '10px 25px', width: 'fit-content' }}>
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
