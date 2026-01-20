import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaInstagram, FaTelegram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги и цены', path: '/services' },
    { name: 'Контакты', path: '/contact' }
  ];

  const serviceItems = [
    { name: 'Лазерная эпиляция', id: 'laser' },
    { name: 'Аппаратный массаж', id: 'massage' }, 
    { name: 'Косметология лица', id: 'cosmetology' }
  ];

  const handleServiceClick = (id) => {
    // Если мы не на странице услуг, переходим на нее
    if (window.location.pathname !== '/services') {
      navigate('/services');
      // Сохраняем id для скролла после загрузки страницы
      sessionStorage.setItem('scrollTo', id);
    } else {
      // Если уже на странице услуг, скроллим к нужному разделу с отступом
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -130; // Отступ в пикселях
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer style={{
      background: 'var(--color-dark-gray)',
      color: 'var(--color-white)',
      padding: '80px 0 40px',
      marginTop: 'auto'
    }}>
      <Container>
        <Row className="gy-5">
          <Col lg={4}>
            <div style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              marginBottom: '20px',
              letterSpacing: '-1px',
              lineHeight: '1'
            }}>
              <span style={{ 
                color: 'var(--color-white)',
                display: 'inline-block'
              }}>
                STAR
              </span>
              <span style={{ 
                color: 'var(--color-accent)',
                display: 'inline-block',
                marginLeft: '5px'
              }}>
                LASER GLOW
              </span>
            </div>
            <p style={{ 
              fontSize: '14px', 
              fontWeight: '300', 
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: '1.7',
              marginBottom: '30px',
              maxWidth: '300px'
            }}>
              Ультрасовременный салон косметологии в Одинцово. 
              Экспертный подход, инновационные технологии и индивидуальный уход.
            </p>
          </Col>
          
          <Col lg={2}>
            <h6 style={{ 
              fontSize: '11px', 
              letterSpacing: '2px', 
              color: 'var(--color-white)',
              fontWeight: '500',
              marginBottom: '20px',
              textTransform: 'uppercase'
            }}>
              Меню
            </h6>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              {menuItems.map((item, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <Link 
                    to={item.path}
                    style={{
                      fontSize: '14px',
                      fontWeight: '300',
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col lg={3}>
            <h6 style={{ 
              fontSize: '11px', 
              letterSpacing: '2px', 
              color: 'var(--color-white)',
              fontWeight: '500',
              marginBottom: '20px',
              textTransform: 'uppercase'
            }}>
              Услуги и цены
            </h6>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              {serviceItems.map((service, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <span
                    onClick={() => handleServiceClick(service.id)}
                    style={{
                      fontSize: '14px',
                      fontWeight: '300',
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      cursor: 'pointer',
                      display: 'block'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                  >
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col lg={3}>
            <h6 style={{ 
              fontSize: '11px', 
              letterSpacing: '2px', 
              color: 'var(--color-white)',
              fontWeight: '500',
              marginBottom: '20px',
              textTransform: 'uppercase'
            }}>
              Контакты
            </h6>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '15px' }}>
                <div className="d-flex align-items-start">
                  <FaMapMarkerAlt className="me-3 mt-1" size={14} style={{ color: 'var(--color-accent)' }} />
                  <span style={{ fontSize: '14px', fontWeight: '300', color: 'rgba(255, 255, 255, 0.7)' }}>
                    г.Одинцово, ул.Северная 15
                  </span>
                </div>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <div className="d-flex align-items-center">
                  <FaPhone className="me-3" size={14} style={{ color: 'var(--color-accent)' }} />
                  <a 
                    href="tel:+79995070555" 
                    style={{ 
                      fontSize: '14px', 
                      fontWeight: '300', 
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                  >
                    +7 999 507 05 55
                  </a>
                </div>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <div className="d-flex align-items-center">
                  <FaEnvelope className="me-3" size={14} style={{ color: 'var(--color-accent)' }} />
                  <a 
                    href="mailto:star_glow_salon@mail.ru" 
                    style={{ 
                      fontSize: '14px', 
                      fontWeight: '300', 
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                  >
                    star_glow_salon@mail.ru
                  </a>
                </div>
              </li>
              <li style={{ marginTop: '20px' }}>
                <div className="d-flex" style={{ gap: '15px' }}>
                  <a 
                    href="https://www.instagram.com/star_laser_glow" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'var(--color-white)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'var(--color-accent)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a 
                    href="https://t.me/star_laser_glow" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'var(--color-white)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'var(--color-accent)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FaTelegram size={18} />
                  </a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        
        <div style={{ 
          marginTop: '20px', 
          paddingTop: '30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Row className="align-items-center">
            <Col md={6}>
              <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
                © {new Date().getFullYear()} Star Laser Glow. Все права защищены.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
                Современная косметология в Одинцово
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;