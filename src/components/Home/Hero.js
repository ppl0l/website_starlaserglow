import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTelegram, FaWhatsapp, FaCalendarAlt, FaTimes, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

function Hero() {
  const titleRef = useRef(null);
  const lettersRef = useRef([]);
  const gradientRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Анимация букв при загрузке
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll('.hero-letter');
      lettersRef.current = letters;
      
      letters.forEach((letter, index) => {
        letter.style.opacity = '0';
        letter.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          letter.style.transition = 'all 0.6s ease';
          letter.style.opacity = '1';
          letter.style.transform = 'translateY(0)';
        }, 100 + index * 50);
      });
    }

    // Анимация градиента
    if (gradientRef.current) {
      gradientRef.current.style.opacity = '0';
      setTimeout(() => {
        gradientRef.current.style.transition = 'opacity 1s ease';
        gradientRef.current.style.opacity = '0.3';
      }, 500);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!lettersRef.current.length) return;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Движение градиента за мышью
    if (gradientRef.current) {
      const moveX = (mouseX - centerX) * 0.005;
      const moveY = (mouseY - centerY) * 0.005;
      gradientRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
    
    // Анимация букв при движении мыши
    lettersRef.current.forEach((letter, index) => {
      const rect = letter.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100;
      
      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        letter.style.transform = `translate(${x * force * 0.1}px, ${y * force * 0.1}px) rotate(${x * force * 0.2}deg)`;
      } else {
        letter.style.transform = 'translate(0, 0) rotate(0deg)';
      }
    });
  };

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

  const handleYclientsClick = () => {
    window.open(contactInfo.yclientsUrl, '_blank');
    setShowModal(false);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <section 
        className="section-huge hero-section" 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-light-gray)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Очень светлый градиентный фон */}
        <div 
          ref={gradientRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(255, 0, 122, 0.03) 0%, transparent 70%)',
            filter: 'blur(15px)',
            opacity: '0.3',
            zIndex: '0',
            pointerEvents: 'none',
            transition: 'transform 0.3s ease'
          }}
        />
        
        <div className="container-huge" style={{ 
          maxWidth: '900px',
          position: 'relative',
          zIndex: '10',
          paddingTop: '1px'
        }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              fontSize: '12px',
              letterSpacing: '2px',
              color: 'var(--color-accent)',
              marginBottom: '40px',
              fontWeight: '500',
              textTransform: 'uppercase',
              position: 'relative',
              zIndex: '20'
            }}>
              Ультрасовременная косметология
            </div>
            
            <h1 
              ref={titleRef} 
              className="main-title-huge"
              style={{ 
                marginBottom: '30px',
                cursor: 'pointer',
                lineHeight: '0.8',
                position: 'relative',
                zIndex: '20'
              }}
            >
              {/* STAR - первая строка (черная) */}
              <div style={{
                position: 'relative',
                marginBottom: '-5px'
              }}>
                <span className="word">
                  {'STAR'.split('').map((letter, index) => (
                    <span 
                      key={`star-${index}`} 
                      className="hero-letter"
                      style={{ 
                        display: 'inline-block',
                        transition: 'transform 0.3s ease, opacity 0.6s ease',
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        fontWeight: '900',
                        letterSpacing: '-0.03em',
                        color: '#000000',
                        position: 'relative',
                        zIndex: '20'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </div>
              
              {/* LASER - вторая строка (розовая) */}
              <div style={{
                position: 'relative',
                marginBottom: '-5px'
              }}>
                <span className="word">
                  {'LASER'.split('').map((letter, index) => (
                    <span 
                      key={`laser-${index}`} 
                      className="hero-letter"
                      style={{ 
                        display: 'inline-block',
                        transition: 'transform 0.3s ease, opacity 0.6s ease',
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        fontWeight: '900',
                        letterSpacing: '-0.03em',
                        color: '#FF007A',
                        position: 'relative',
                        zIndex: '20'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </div>
              
              {/* GLOW - третья строка (черная) */}
              <div style={{
                position: 'relative',
                marginTop: '-5px'
              }}>
                <span className="word">
                  {'GLOW'.split('').map((letter, index) => (
                    <span 
                      key={`glow-${index}`} 
                      className="hero-letter"
                      style={{ 
                        display: 'inline-block',
                        transition: 'transform 0.3s ease, opacity 0.6s ease',
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        fontWeight: '900',
                        letterSpacing: '-0.03em',
                        color: '#000000',
                        position: 'relative',
                        zIndex: '20'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </div>
            </h1>
            
            <div style={{ 
              fontSize: '18px', 
              fontWeight: '300', 
              color: 'var(--color-dark-gray)',
              marginBottom: '50px',
              maxWidth: '600px',
              lineHeight: '1.6',
              margin: '0 auto 50px',
              position: 'relative',
              zIndex: '20'
            }}>
              Салон косметологии нового поколения в Одинцово.
              <br />Инновационные технологии и индивидуальный подход.
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              flexWrap: 'wrap',
              justifyContent: 'center',
              position: 'relative',
              zIndex: '20'
            }}>
              <button 
                onClick={() => setShowModal(true)}
                className="btn-huge"
                style={{
                  padding: '16px 32px',
                  fontSize: '12px',
                  fontWeight: '500',
                  letterSpacing: '2px',
                  background: 'transparent',
                  border: '1px solid var(--color-black)',
                  color: 'var(--color-black)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(10px)',
                  zIndex: '20',
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--color-black)';
                  e.currentTarget.style.color = 'var(--color-white)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.color = 'var(--color-black)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Записаться онлайн
              </button>
              <Link 
                to="/services" 
                className="btn-huge"
                style={{
                  padding: '16px 32px',
                  fontSize: '12px',
                  fontWeight: '500',
                  letterSpacing: '2px',
                  background: 'transparent',
                  border: '1px solid var(--color-accent)',
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(10px)',
                  zIndex: '20'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent)';
                  e.currentTarget.style.color = 'var(--color-white)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 0, 122, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Наши услуги
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                      color: 'var(---color-dark-gray)',
                      lineHeight: '1.5',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-black)'}
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

export default Hero;