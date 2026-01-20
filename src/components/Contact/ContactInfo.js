import { ListGroup } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaTelegram, FaInstagram } from 'react-icons/fa';

function ContactInfo() {
  return (
    <div style={{ 
      background: 'white',
      border: '1px solid rgba(255,0,122,0.2)',
      boxShadow: '0 10px 30px rgba(255,0,122,0.1)',
      borderRadius: '8px',
      padding: '32px'
    }}>
      <h4 className="fw-bold mb-4" style={{ color: '#FF007A', fontSize: '1.8rem' }}>
        Контактная информация
      </h4>
      
      <ListGroup variant="flush" style={{ border: 'none' }}>
        <ListGroup.Item className="border-0 py-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <div className="d-flex align-items-center">
            <FaMapMarkerAlt className="me-3" size={20} style={{ color: '#FF007A' }} />
            <div>
              <h6 className="fw-bold mb-1" style={{ color: '#333' }}>Адрес</h6>
              <p className="mb-0" style={{ color: '#666' }}>Московская область, г.Одинцово, ул.Северная 15</p>
            </div>
          </div>
        </ListGroup.Item>
        
        <ListGroup.Item className="border-0 py-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <div className="d-flex align-items-center">
            <FaPhone className="me-3" size={20} style={{ color: '#FF007A' }} />
            <div>
              <h6 className="fw-bold mb-1" style={{ color: '#333' }}>Телефон</h6>
              <p className="mb-0" style={{ color: '#666' }}>
                +7 999 507-05-55
              </p>
            </div>
          </div>
        </ListGroup.Item>
        
        <ListGroup.Item className="border-0 py-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <div className="d-flex align-items-center">
            <FaEnvelope className="me-3" size={20} style={{ color: '#FF007A' }} />
            <div>
              <h6 className="fw-bold mb-1" style={{ color: '#333' }}>Email</h6>
              <p className="mb-0" style={{ color: '#666' }}>
                star_glow_salon@mail.ru
              </p>
            </div>
          </div>
        </ListGroup.Item>
        
        <ListGroup.Item className="border-0 py-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <div className="d-flex align-items-center">
            <FaClock className="me-3" size={20} style={{ color: '#FF007A' }} />
            <div>
              <h6 className="fw-bold mb-1" style={{ color: '#333' }}>Часы работы</h6>
              <p className="mb-0" style={{ color: '#666' }}>Ежедневно: 10:00 - 22:00</p>
            </div>
          </div>
        </ListGroup.Item>
        
        <ListGroup.Item className="border-0 py-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <div className="d-flex align-items-center">
            <FaTelegram className="me-3" size={20} style={{ color: '#FF007A' }} />
            <div>
              <h6 className="fw-bold mb-1" style={{ color: '#333' }}>Telegram</h6>
              <a 
                href="https://t.me/star_laser_glow" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#FF007A', 
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e6006e';
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#FF007A';
                  e.currentTarget.style.textDecoration = 'none';
                }}
              >
                @star_laser_glow
                <span style={{ marginLeft: '8px', fontSize: '0.9em' }}>↗</span>
              </a>
            </div>
          </div>
        </ListGroup.Item>
        
        <ListGroup.Item className="border-0 py-3">
          <div className="d-flex align-items-center">
            <FaInstagram className="me-3" size={20} style={{ color: '#FF007A' }} />
            <div>
              <h6 className="fw-bold mb-1" style={{ color: '#333' }}>Instagram</h6>
              <a 
                href="https://www.instagram.com/star_laser_glow" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#FF007A', 
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e6006e';
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#FF007A';
                  e.currentTarget.style.textDecoration = 'none';
                }}
              >
                Star_laser_glow
                <span style={{ marginLeft: '8px', fontSize: '0.9em' }}>↗</span>
              </a>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
      
    </div>
  );
}

export default ContactInfo;