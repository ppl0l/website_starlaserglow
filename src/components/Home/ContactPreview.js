import { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaCalendarAlt, FaInstagram, FaTelegram, FaChevronLeft, FaChevronRight, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

function ContactPreview() {
  const salonAddress = "Московская область, г.Одинцово, ул.Северная 15";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(salonAddress)}`;
  const yclientsUrl = "https://n1947028.yclients.com/";
  const instagramUrl = "https://www.instagram.com/star_laser_glow";
  const telegramUrl = "https://t.me/star_laser_glow";
  const whatsappUrl = "https://wa.me/79995070555";
  
  const mapRef = useRef(null);
  const infoRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  const photos = [
    "/photo/4.png",
    "/photo/3.png",
    "/photo/1.png",
    "/photo/2.png"
  ];
  
  const handleCardHover = (ref, isHovering) => {
    if (!ref.current) return;
    
    ref.current.style.transform = isHovering ? 'translateY(-5px)' : 'translateY(0)';
    ref.current.style.boxShadow = isHovering 
      ? '0 20px 40px rgba(0, 0, 0, 0.1)' 
      : '0 5px 15px rgba(0, 0, 0, 0.05)';
  };
  
  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };
  
  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleYclientsClick = () => {
    window.open(yclientsUrl, '_blank');
    setShowModal(false);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <section className="section-huge section-light" style={{ position: 'relative' }}>
        {/* Градиентный фон */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(255, 0, 122, 0.05) 0%, transparent 70%)',
          filter: 'blur(30px)',
          opacity: '0.5',
          zIndex: '1',
          pointerEvents: 'none'
        }} />
        
        <div className="container-huge">
        <div className="grid-huge" style={{ marginBottom: '80px', alignItems: 'center' }}>
  <div style={{ gridColumn: 'span 4' }}>
    <div style={{
      fontSize: '12px',
      letterSpacing: '2px',
      color: 'var(--color-accent)',
      marginBottom: '20px',
      fontWeight: '500',
      textTransform: 'uppercase'
    }}>
      КОНТАКТЫ
    </div>
    <h2 style={{ 
      marginBottom: '0', 
      color: 'var(--color-black)',
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      lineHeight: '1.1'
    }}>
      О салоне
    </h2>
  </div>
  
  <div style={{ 
    gridColumn: 'span 8',
    alignSelf: 'center',
    paddingLeft: '1px'
  }}>
    <p style={{ 
      fontSize: '18px', 
      fontWeight: '300',
      opacity: '0.8',
      color: 'var(--color-dark-gray)'
    }}>
      Мы предлагаем индивидуальный подход, выгодные комплексы и скидку 20% на первую процедуру, чтобы вы могли вернуть коже сияние, а фигуре — гармоничные контуры.
    </p>
    <p style={{ 
      fontSize: '18px', 
      fontWeight: '300',
      opacity: '0.8',
      color: 'var(--color-dark-gray)'
    }}>
      Доверьте заботу о своей красоте экспертам, которые знают, как сделать результат не только эффективным, но и комфортным. Star Laser Glow — это не просто сияние. Это уверенность, которую вы уносите с собой.
    </p>
  </div>
</div>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '40px',
            alignItems: 'stretch',
            flexWrap: 'wrap' // Перенос на новую строку на мобиле
          }}>
            {/* Карта */}
            <div 
              ref={mapRef}
              style={{ 
                flex: '1.5', // Уменьшаем ширину карты
                minWidth: '280px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={() => handleCardHover(mapRef, true)}
              onMouseLeave={() => handleCardHover(mapRef, false)}
            >
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  textDecoration: 'none',
                  display: 'block',
                  height: '100%'
                }}
              >
                <div className="card-huge" style={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '50px 30px'
                }}>
                  <div style={{ 
                    width: '70px', 
                    height: '70px',
                    background: 'var(--gradient-pink)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '25px'
                  }}>
                    <FaMapMarkerAlt size={26} style={{ color: 'white' }} />
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    letterSpacing: '2px', 
                    marginBottom: '12px',
                    color: 'var(--color-accent)',
                    fontWeight: '500',
                    textTransform: 'uppercase'
                  }}>
                    ОТКРЫТЬ КАРТУ
                  </div>
                  <div style={{ 
                    fontSize: '13px', 
                    color: 'var(--color-dark-gray)',
                    textAlign: 'center',
                    opacity: '0.7'
                  }}>
                    {salonAddress}
                  </div>
                </div>
              </a>
            </div>
            
            {/* Контактная информация */}
            <div 
              ref={infoRef}
              style={{ 
                flex: '1.5', // Увеличиваем ширину контактной информации
                minWidth: '280px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={() => handleCardHover(infoRef, true)}
              onMouseLeave={() => handleCardHover(infoRef, false)}
            >
              <div className="card-huge" style={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '50px 40px'
              }}>
                <div style={{ 
                  fontSize: '12px', 
                  letterSpacing: '2px', 
                  marginBottom: '40px', 
                  color: 'var(--color-accent)',
                  fontWeight: '500',
                  textTransform: 'uppercase'
                }}>
                  КОНТАКТНАЯ ИНФОРМАЦИЯ
                </div>
                
                <div style={{ flex: '1' }}>
                  {/* Адрес */}
                  <div className="contact-info-item" style={{ 
                    marginBottom: '35px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px'
                  }}>
                    <div className="contact-icon" style={{ 
                      background: 'var(--color-light-gray)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <FaMapMarkerAlt size={16} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div style={{ flex: '1' }}>
                      <div style={{ 
                        fontSize: '11px', 
                        letterSpacing: '1.5px', 
                        marginBottom: '8px',
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
                        {salonAddress}
                      </div>
                    </div>
                  </div>
                  
                  {/* Телефон */}
                  <div className="contact-info-item" style={{ 
                    marginBottom: '35px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px'
                  }}>
                    <div className="contact-icon" style={{ 
                      background: 'var(--color-light-gray)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <FaPhone size={16} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div style={{ flex: '1' }}>
                      <div style={{ 
                        fontSize: '11px', 
                        letterSpacing: '1.5px', 
                        marginBottom: '8px',
                        color: 'var(--color-dark-gray)',
                        opacity: '0.7',
                        textTransform: 'uppercase'
                      }}>
                        ТЕЛЕФОН
                      </div>
                      <div style={{ 
                        fontSize: '15px', 
                        fontWeight: '400', 
                        color: 'var(--color-dark-gray)',
                        lineHeight: '1.5'
                      }}>
                        +7 999 507 05 55
                      </div>
                    </div>
                  </div>
                  
                  {/* Часы работы */}
                  <div className="contact-info-item" style={{ 
                    marginBottom: '35px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px'
                  }}>
                    <div className="contact-icon" style={{ 
                      background: 'var(--color-light-gray)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <FaClock size={16} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div style={{ flex: '1' }}>
                      <div style={{ 
                        fontSize: '11px', 
                        letterSpacing: '1.5px', 
                        marginBottom: '8px',
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
                        Ежедневно: 10:00 - 22:00
                      </div>
                    </div>
                  </div>
                  
                  {/* Онлайн-запись через yclients */}
                  <a 
                    href={yclientsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-item"
                    style={{ 
                      marginBottom: '35px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '15px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      const title = e.currentTarget.querySelector('.online-booking-title');
                      const text = e.currentTarget.querySelector('.online-booking-text');
                      if (title) title.style.color = 'var(--color-accent)';
                      if (text) text.style.color = 'var(--color-accent)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      const title = e.currentTarget.querySelector('.online-booking-title');
                      const text = e.currentTarget.querySelector('.online-booking-text');
                      if (title) title.style.color = 'var(--color-dark-gray)';
                      if (text) text.style.color = 'var(--color-dark-gray)';
                    }}
                  >
                    <div className="contact-icon" style={{ 
                      background: 'var(--color-light-gray)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}>
                      <FaCalendarAlt size={16} style={{ color: 'var(--color-accent)', transition: 'all 0.3s ease' }} />
                    </div>
                    <div style={{ flex: '1' }}>
                      <div 
                        className="online-booking-title"
                        style={{ 
                          fontSize: '11px', 
                          letterSpacing: '1.5px', 
                          marginBottom: '8px',
                          color: 'var(--color-dark-gray)',
                          opacity: '0.7',
                          textTransform: 'uppercase',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        ОНЛАЙН-ЗАПИСЬ
                      </div>
                      <div 
                        className="online-booking-text"
                        style={{ 
                          fontSize: '15px', 
                          fontWeight: '400', 
                          color: 'var(--color-accent)',
                          lineHeight: '1.5',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        YCLIENTS
                      </div>
                    </div>
                  </a>
                  
                  {/* Социальные сети */}
                  <div style={{ marginBottom: '35px' }}>
                    <div style={{ 
                      fontSize: '11px', 
                      letterSpacing: '1.5px', 
                      marginBottom: '8px',
                      color: 'var(--color-dark-gray)',
                      opacity: '0.7',
                      textTransform: 'uppercase',
                      paddingLeft: '75px' /* Добавляем отступ, чтобы текст начинался с того же места, что и остальные */
                    }}>
                      МЫ В СОЦСЕТЯХ
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', paddingLeft: '2px' }}>
                      {/* Instagram */}
                      <a 
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '35px',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          padding: '0'
                        }}
                        onMouseEnter={(e) => {
                          const iconWrapper = e.currentTarget.querySelector('.social-icon-wrapper');
                          const icon = e.currentTarget.querySelector('.social-icon');
                          const text = e.currentTarget.querySelector('.social-text');
                          
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          if (iconWrapper) iconWrapper.style.background = '#E1306C';
                          if (icon) icon.style.color = '#FFFFFF';
                          if (text) text.style.color = 'var(--color-accent)';
                        }}
                        onMouseLeave={(e) => {
                          const iconWrapper = e.currentTarget.querySelector('.social-icon-wrapper');
                          const icon = e.currentTarget.querySelector('.social-icon');
                          const text = e.currentTarget.querySelector('.social-text');
                          
                          e.currentTarget.style.transform = 'translateY(0)';
                          if (iconWrapper) iconWrapper.style.background = 'var(--color-light-gray)';
                          if (icon) icon.style.color = 'var(--color-dark-gray)';
                          if (text) text.style.color = 'var(--color-dark-gray)';
                        }}
                      >
                        <div className="social-icon-wrapper" style={{
                          width: '40px',
                          height: '40px',
                          background: 'var(--color-light-gray)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          flexShrink: 0
                        }}>
                          <FaInstagram 
                            size={16} 
                            className="social-icon"
                            style={{ 
                              color: 'var(--color-accent)',
                              transition: 'all 0.3s ease'
                            }} 
                          />
                        </div>
                        <span className="social-text" style={{ 
                          fontSize: '14px',
                          fontWeight: '400',
                          color: 'var(--color-accent)',
                          transition: 'all 0.3s ease'
                        }}>
                          @star_laser_glow
                        </span>
                      </a>
                      
                      {/* Telegram */}
                      <a 
                        href={telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '35px',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          padding: '0'
                        }}
                        onMouseEnter={(e) => {
                          const iconWrapper = e.currentTarget.querySelector('.social-icon-wrapper');
                          const icon = e.currentTarget.querySelector('.social-icon');
                          const text = e.currentTarget.querySelector('.social-text');
                          
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          if (iconWrapper) iconWrapper.style.background = '#E1306C';
                          if (icon) icon.style.color = '#FFFFFF';
                          if (text) text.style.color = 'var(--color-accent)';
                        }}
                        onMouseLeave={(e) => {
                          const iconWrapper = e.currentTarget.querySelector('.social-icon-wrapper');
                          const icon = e.currentTarget.querySelector('.social-icon');
                          const text = e.currentTarget.querySelector('.social-text');
                          
                          e.currentTarget.style.transform = 'translateY(0)';
                          if (iconWrapper) iconWrapper.style.background = 'var(--color-light-gray)';
                          if (icon) icon.style.color = 'var(--color-dark-gray)';
                          if (text) text.style.color = 'var(--color-dark-gray)';
                        }}
                      >
                        <div className="social-icon-wrapper" style={{
                          width: '40px',
                          height: '40px',
                          background: 'var(--color-light-gray)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          flexShrink: 0
                        }}>
                          <FaTelegram 
                            size={16} 
                            className="social-icon"
                            style={{ 
                              color: 'var(--color-accent)',
                              transition: 'all 0.3s ease'
                            }} 
                          />
                        </div>
                        <span className="social-text" style={{ 
                          fontSize: '14px',
                          fontWeight: '400',
                          color: 'var(--color-accent)',
                          transition: 'all 0.3s ease'
                        }}>
                          @star_laser_glow
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Кнопка записи */}
                <div style={{ marginTop: 'auto' }}>
                  <button
                    onClick={() => setShowModal(true)}
                    className="btn-huge btn-accent w-100 text-center"
                    style={{ 
                      fontSize: '11px',
                      fontWeight: '500',
                      letterSpacing: '2px',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '14px 24px',
                      border: '1px solid var(--color-accent)',
                      color: 'var(--color-accent)',
                      background: 'transparent',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      width: '100%'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'var(--color-accent)';
                      e.currentTarget.style.color = 'var(--color-white)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--color-accent)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    ЗАПИСАТЬСЯ ОНЛАЙН
                  </button>
                </div>
              </div>
            </div>
            
            {/* Карусель фото */}
            <div style={{ 
              flex: '1.5', // Такая же ширина как у других блоков
              minWidth: '280px',
              position: 'relative'
            }}>
              <div className="card-huge" style={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  fontSize: '12px', 
                  letterSpacing: '2px', 
                  marginTop: '25px',
                  marginBottom: '20px', 
                  color: 'var(--color-accent)',
                  fontWeight: '500',
                  textTransform: 'uppercase'
                }}>
                  НАШ САЛОН
                </div>
                
                {/* Основное фото */}
                <div style={{
                  flex: '1',
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-light-gray)',
                  marginBottom: '20px'
                }}>
                  <img 
                    src={photos[currentPhotoIndex]} 
                    alt={`Фото салона ${currentPhotoIndex + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  
                  {/* Стрелки навигации */}
                  <button
                    onClick={handlePrevPhoto}
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: '2'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                      e.currentTarget.style.color = 'var(--color-dark-gray)';
                    }}
                  >
                    <FaChevronLeft size={16} style={{ color: 'var(--color-dark-gray)' }} />
                  </button>
                  
                  <button
                    onClick={handleNextPhoto}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: '2'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                      e.currentTarget.style.color = 'var(--color-dark-gray)';
                    }}
                  >
                    <FaChevronRight size={16} style={{ color: 'var(--color-dark-gray)' }} />
                  </button>
                </div>
                
                {/* Миниатюры */}
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'center',
                  marginTop: 'auto'
                }}>
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      style={{
                        width: '50px',
                        height: '6px',
                        borderRadius: '3px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backgroundColor: index === currentPhotoIndex 
                          ? 'var(--color-accent)' 
                          : 'rgba(0, 0, 0, 0.1)',
                        padding: '0'
                      }}
                      onMouseOver={(e) => {
                        if (index !== currentPhotoIndex) {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 0, 122, 0.3)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (index !== currentPhotoIndex) {
                          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
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
                onClick={() => handleSocialClick(instagramUrl)}
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
                onClick={() => handleSocialClick(telegramUrl)}
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
                onClick={() => handleSocialClick(whatsappUrl)}
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
              fontSize: '12px',
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
                    {salonAddress}
                  </div>
                  <a 
                    href={googleMapsUrl}
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
                    href={`tel:+79995070555`}
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
                    +7 999 507 05 55
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
                    Ежедневно: 10:00 - 22:00
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

export default ContactPreview;