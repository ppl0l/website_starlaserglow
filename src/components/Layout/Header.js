import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaTelegram, FaWhatsapp, FaCalendarAlt, FaTimes, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  // Контактная информация
  const contactInfo = {
    address: "Московская область, г.Одинцово, ул.Северная 15",
    phone: "+7 999 507 05 55",
    hours: "Ежедневно: 10:00 - 22:00",
    yclientsUrl: "https://n1947028.yclients.com/",
    instagramUrl: "https://www.instagram.com/star_laser_glow",
    telegramUrl: "https://t.me/star_laser_glow",
    whatsappUrl: "https://wa.me/79995070555",
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Московская область, г.Одинцово, ул.Северная 15")}`
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    checkMobile();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
  };

  const handleYclientsClick = () => {
    window.open(contactInfo.yclientsUrl, '_blank');
    setShowModal(false);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handleLogoHover = (e) => {
    const letters = e.currentTarget.querySelectorAll('.logo-letter');
    letters.forEach((letter, index) => {
      if (index >= 5) { // Буквы GLOW (индексы 5-9)
        letter.style.transform = `translateY(-5px) rotate(${index % 2 === 0 ? -5 : 5}deg) scale(1.05)`;
      } else {
        letter.style.transform = `translateY(-5px) rotate(${index % 2 === 0 ? -5 : 5}deg)`;
      }
    });
  };

  const handleLogoLeave = (e) => {
    const letters = e.currentTarget.querySelectorAll('.logo-letter');
    letters.forEach((letter) => {
      letter.style.transform = 'translateY(0) rotate(0deg) scale(1)';
    });
  };

  const getPagePath = (pageName) => {
    switch(pageName) {
      case 'Главная': return '/';
      case 'Услуги и цены': return '/services';
      default: return '/';
    }
  };

  const isActivePage = (pageName) => {
    const pagePath = getPagePath(pageName);
    return location.pathname === pagePath;
  };

  const logoLetters = 'STAR LASER GLOW'.split('');

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '0 40px',
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.05)' : 'none',
        height: '80px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Логотип слева - STAR и GLOW черный, LASER розовый */}
          <Link 
            to="/" 
            style={{
              fontSize: '24px',
              fontWeight: '700',
              textDecoration: 'none',
              position: 'absolute',
              left: '0',
              letterSpacing: '-0.5px',
              display: 'flex',
              alignItems: 'center'
            }}
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoLeave}
          >
            {logoLetters.map((letter, index) => {
              const isSpace = letter === ' ';
              const isLaserLetter = index >= 5 && index <= 9; // Буквы L, A, S, E, R (индексы 5-9)
              
              return (
                <span 
                  key={index} 
                  className="logo-letter"
                  style={{ 
                    display: 'inline-block',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    marginRight: isSpace ? '10px' : '0',
                    color: isLaserLetter ? '#FF007A' : '#000000', // LASER розовый, остальное черное
                    ...(isLaserLetter && {
                      background: 'linear-gradient(45deg, #FF007A, #FF4D94)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    })
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </Link>
          
          {/* Десктопная навигация */}
          {!isMobile && (
            <div style={{ 
              display: 'flex',
              gap: '40px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {['Главная', 'Услуги и цены'].map((item, index) => (
                <Link
                  key={index}
                  to={getPagePath(item)}
                  style={{
                    fontSize: '13px',
                    letterSpacing: '1px',
                    fontWeight: '500',
                    color: isActivePage(item) ? '#FF007A' : '#000000',
                    position: 'relative',
                    padding: '5px 0',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    if (!isActivePage(item)) {
                      e.currentTarget.style.color = '#FF007A';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActivePage(item)) {
                      e.currentTarget.style.color = '#000000';
                    }
                  }}
                >
                  {item}
                  {isActivePage(item) && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '0',
                      width: '100%',
                      height: '2px',
                      background: '#FF007A'
                    }} />
                  )}
                </Link>
              ))}
            </div>
          )}
          
          {/* Кнопка записи (десктоп) */}
          {!isMobile && (
            <button
              onClick={() => setShowModal(true)}
              style={{
                position: 'absolute',
                right: '0',
                padding: '12px 24px',
                fontSize: '12px',
                fontWeight: '500',
                letterSpacing: '1px',
                background: 'transparent',
                border: '1px solid #000000',
                color: '#000000',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#000000';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Записаться
            </button>
          )}
          
          {/* Кнопка меню (только мобильные) */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              style={{ 
                position: 'absolute',
                right: '0',
                fontSize: '24px', 
                color: '#000000', 
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: '0'
              }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          )}
        </div>
      </nav>

      {/* Мобильное меню */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100vh',
          background: '#FFFFFF',
          zIndex: '999',
          padding: '100px 40px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '50px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {logoLetters.map((letter, index) => {
              const isSpace = letter === ' ';
              const isLaserLetter = index >= 5 && index <= 9; // Буквы L, A, S, E, R (индексы 5-9)
              
              return (
                <span 
                  key={index}
                  style={{ 
                    marginRight: isSpace ? '10px' : '0',
                    color: isLaserLetter ? '#FF007A' : '#000000',
                    ...(isLaserLetter && {
                      background: 'linear-gradient(45deg, #FF007A, #FF4D94)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    })
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </div>
          
          {['Главная', 'Услуги и цены'].map((item, index) => (
            <Link
              key={index}
              to={getPagePath(item)}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '700',
                color: isActivePage(item) ? '#FF007A' : '#000000',
                margin: '15px 0',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
          
          <div style={{ 
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => {
                setShowModal(true);
                toggleMenu();
              }}
              style={{ 
                width: '100%',
                maxWidth: '300px',
                padding: '16px 30px',
                fontSize: '12px',
                fontWeight: '500',
                letterSpacing: '1px',
                background: 'transparent',
                border: '1px solid #000000',
                color: '#000000',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                textDecoration: 'none',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#000000';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Записаться онлайн
            </button>
          </div>
        </div>
      )}

      {/* Модальное окно записи онлайн */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        style={{
          fontFamily: 'var(--font-primary)'
        }}
      >
        <Modal.Header style={{ 
          borderBottom: '1px solid rgba(0,0,0,0.1)', 
          position: 'relative',
          padding: '20px 30px'
        }}>
          <Modal.Title style={{ 
            fontSize: '24px', 
            fontWeight: '700',
            color: 'var(--color-black)',
            flex: '1'
          }}>
            Запись на консультацию
          </Modal.Title>
          <button 
            onClick={() => setShowModal(false)}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: 'var(--color-dark-gray)',
              transition: 'color 0.3s ease',
              padding: '0',
              lineHeight: '1'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-dark-gray)'}
          >
            <FaTimes />
          </button>
        </Modal.Header>
        
        <Modal.Body style={{ padding: '30px' }}>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ 
              fontSize: '14px',
              letterSpacing: '2px',
              color: 'var(--color-accent)',
              marginBottom: '25px',
              fontWeight: '500',
              textTransform: 'uppercase'
            }}>
              ВЫБЕРИТЕ СПОСОБ СВЯЗИ
            </h3>
            
            {/* YClients кнопка */}
            <button
              onClick={handleYclientsClick}
              style={{
                width: '100%',
                padding: '18px 24px',
                background: 'var(--color-accent)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                marginBottom: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#e6006e';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 0, 122, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'var(--color-accent)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaCalendarAlt size={20} />
              Записаться через YCLIENTS
            </button>
            
            <div style={{ 
              textAlign: 'center', 
              margin: '25px 0',
              position: 'relative'
            }}>
              <span style={{
                display: 'inline-block',
                padding: '0 15px',
                background: 'white',
                fontSize: '12px',
                color: 'var(--color-dark-gray)',
                opacity: '0.7',
                position: 'relative',
                zIndex: '1'
              }}>
                ИЛИ
              </span>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                right: '0',
                height: '1px',
                background: 'rgba(0,0,0,0.1)',
                zIndex: '0'
              }} />
            </div>
            
            {/* Социальные сети */}
            <h4 style={{ 
              fontSize: '14px',
              letterSpacing: '2px',
              color: 'var(--color-accent)',
              marginBottom: '25px',
              fontWeight: '500',
              textTransform: 'uppercase'
            }}>
              НАПИШИТЕ НАМ В СОЦСЕТЯХ
            </h4>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '15px',
              marginBottom: '30px'
            }}>
              <button
                onClick={() => handleSocialClick(contactInfo.instagramUrl)}
                style={{
                  padding: '15px',
                  background: 'rgba(225, 48, 108, 0.1)',
                  border: '1px solid rgba(225, 48, 108, 0.2)',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 0, 122, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 0, 122, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaInstagram size={24} style={{ color: '#E1306C' }} />
                <span style={{ 
                  fontSize: '12px', 
                  fontWeight: '500',
                  color: 'var(--color-dark-gray)'
                }}>
                  Instagram
                </span>
              </button>
              
              <button
                onClick={() => handleSocialClick(contactInfo.telegramUrl)}
                style={{
                  padding: '15px',
                  background: 'rgba(255, 0, 122, 0.1)',
                  border: '1px solid rgba(255, 0, 122, 0.2)',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 0, 122, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 0, 122, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaTelegram size={24} style={{ color: '#FF007A' }} />
                <span style={{ 
                  fontSize: '12px', 
                  fontWeight: '500',
                  color: 'var(--color-dark-gray)'
                }}>
                  Telegram
                </span>
              </button>
              
              <button
                onClick={() => handleSocialClick(contactInfo.whatsappUrl)}
                style={{
                  padding: '15px',
                  background: 'rgba(255, 0, 122, 0.1)',
                  border: '1px solid rgba(255, 0, 122, 0.2)',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 0, 122, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 0, 122, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaWhatsapp size={24} style={{ color: '#FF007A' }} />
                <span style={{ 
                  fontSize: '12px', 
                  fontWeight: '500',
                  color: 'var(--color-dark-gray)'
                }}>
                  WhatsApp
                </span>
              </button>
            </div>
          </div>
          
          {/* Контактная информация */}
          <div style={{ 
            borderTop: '1px solid rgba(0,0,0,0.1)', 
            paddingTop: '25px'
          }}>
            <h3 style={{ 
              fontSize: '14px',
              letterSpacing: '2px',
              color: 'var(--color-accent)',
              marginBottom: '25px',
              fontWeight: '500',
              textTransform: 'uppercase'
            }}>
              КОНТАКТНАЯ ИНФОРМАЦИЯ
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ 
                  width: '40px',
                  height: '40px',
                  background: 'var(--color-light-gray)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <FaMapMarkerAlt size={16} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <div style={{ 
                    fontSize: '11px', 
                    letterSpacing: '1.5px', 
                    marginBottom: '5px',
                    color: 'var(--color-dark-gray)',
                    opacity: '0.7',
                    textTransform: 'uppercase'
                  }}>
                    АДРЕС
                  </div>
                  <div style={{ 
                    fontSize: '15px', 
                    fontWeight: '400', 
                    color: 'var(--color-dark-gray)',
                    lineHeight: '1.5'
                  }}>
                    {contactInfo.address}
                  </div>
                  <a 
                    href={contactInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-accent)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      display: 'inline-block',
                      marginTop: '5px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#e6006e'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                  >
                    Открыть карту →
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ 
                  width: '40px',
                  height: '40px',
                  background: 'var(--color-light-gray)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <FaPhone size={16} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <div style={{ 
                    fontSize: '11px', 
                    letterSpacing: '1.5px', 
                    marginBottom: '5px',
                    color: 'var(--color-dark-gray)',
                    opacity: '0.7',
                    textTransform: 'uppercase'
                  }}>
                    ТЕЛЕФОН
                  </div>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    style={{
                      fontSize: '15px', 
                      fontWeight: '400', 
                      color: 'var(--color-dark-gray)',
                      lineHeight: '1.5',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-dark-gray)'}
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ 
                  width: '40px',
                  height: '40px',
                  background: 'var(--color-light-gray)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <FaClock size={16} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <div style={{ 
                    fontSize: '11px', 
                    letterSpacing: '1.5px', 
                    marginBottom: '5px',
                    color: 'var(--color-dark-gray)',
                    opacity: '0.7',
                    textTransform: 'uppercase'
                  }}>
                    ЧАСЫ РАБОТЫ
                  </div>
                  <div style={{ 
                    fontSize: '15px', 
                    fontWeight: '400', 
                    color: 'var(--color-dark-gray)',
                    lineHeight: '1.5'
                  }}>
                    {contactInfo.hours}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        
        <Modal.Footer style={{ 
          borderTop: '1px solid rgba(0,0,0,0.1)', 
          padding: '20px 30px',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => setShowModal(false)}
            style={{
              padding: '12px 30px',
              background: 'transparent',
              border: '1px solid var(--color-accent)',
              borderRadius: '8px',
              color: 'var(--color-accent)',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'var(--color-accent)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--color-accent)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Закрыть
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;