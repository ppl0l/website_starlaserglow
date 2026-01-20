import { Row, Col } from 'react-bootstrap';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';

function ContactPage() {
  const handleMapsClick = () => {
    // Адрес для Google Maps
    const address = "Московская область, г.Одинцово, ул.Северная 15";
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    
    // Открываем в новой вкладке
    window.open(mapsUrl, '_blank');
  };

  return (
    <div style={{ 
      padding: '80px 0',
      position: 'relative',
      marginBottom: '80px'
    }}>
      <div className="container-huge" style={{ position: 'relative', zIndex: '2' }}>
        {/* ЗАГОЛОВОК ПОСЕРЕДИНЕ */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '60px',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h1 style={{ 
            marginBottom: '20px', 
            color: 'var(--color-black)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700'
          }}>
            Контакты и запись
          </h1>
          
          <p style={{ 
            fontSize: '18px', 
            fontWeight: '300',
            color: 'var(--color-dark-gray)',
            lineHeight: '1.6',
            opacity: '0.8'
          }}>
            Запишитесь на процедуру онлайн или свяжитесь с нами удобным способом.
          </p>
        </div>

        {/* КОНТЕНТ СТРАНИЦЫ */}
        <Row className="g-4">
          <Col lg={5}>
            <ContactInfo />
            
            <div className="mt-4">
              <div className="p-4 rounded" style={{ 
                background: 'linear-gradient(135deg, rgba(255,0,122,0.05) 0%, rgba(255,0,122,0.02) 100%)',
                border: '1px solid rgba(255,0,122,0.1)'
              }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--color-accent)' }}>Местоположение</h5>
                <p className="mb-3" style={{ color: 'var(--color-dark-gray)' }}>
                  <strong style={{ color: 'var(--color-accent)' }}>Адрес:</strong> Московская область, г.Одинцово, ул.Северная 15
                </p>
                <p className="mb-4" style={{ color: 'var(--color-dark-gray)' }}>
                  <strong style={{ color: 'var(--color-accent)' }}>Рядом:</strong> Парковка, остановка общественного транспорта
                </p>
                <div className="text-center mt-4">
                  <button
                    onClick={handleMapsClick}
                    style={{
                      background: '#FF007A',
                      border: 'none',
                      padding: '12px 24px',
                      fontWeight: '600',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      color: 'white',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      width: '100%',
                      fontSize: '16px'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#e6006e';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 0, 122, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = '#FF007A';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Открыть в Google Maps
                  </button>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={7}>
            <div className="p-4 rounded" style={{ 
              background: 'white',
              border: '1px solid rgba(255,0,122,0.2)',
              boxShadow: '0 10px 30px rgba(255,0,122,0.1)'
            }}>
              <h4 className="fw-bold mb-3" style={{ color: 'var(--color-accent)' }}>Записаться онлайн</h4>
              <p className="mb-4" style={{ color: 'var(--color-dark-gray)' }}>
                Заполните форму ниже, и наш администратор свяжется с вами для подтверждения записи и уточнения деталей.
              </p>
              <ContactForm />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContactPage;