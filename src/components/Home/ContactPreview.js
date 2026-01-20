import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram, FaTelegram } from 'react-icons/fa';

function ContactPreview() {
  const salonAddress = "Московская область, г.Одинцово, ул.Северная 15";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(salonAddress)}`;
  const instagramUrl = "https://www.instagram.com/star_laser_glow";
  const telegramUrl = "https://t.me/star_laser_glow";
  
  const mapRef = useRef(null);
  const infoRef = useRef(null);

  const handleCardHover = (ref, isHovering) => {
    if (!ref.current) return;
    
    ref.current.style.transform = isHovering ? 'translateY(-5px)' : 'translateY(0)';
    ref.current.style.boxShadow = isHovering 
      ? '0 20px 40px rgba(0, 0, 0, 0.1)' 
      : '0 5px 15px rgba(0, 0, 0, 0.05)';
  };

  return (
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
        <div className="grid-huge" style={{ marginBottom: '80px' }}>
          <div style={{ gridColumn: 'span 12' }}>
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
              marginBottom: '30px', 
              color: 'var(--color-black)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)'
            }}>
              Местоположение
            </h2>
          </div>
          
          {/* Убираем правую колонку с текстом */}
          <div style={{ gridColumn: 'span 8' }}>
            {/* Оставляем пустым или удаляем этот блок */}
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
              flex: '2', // Занимает 2/3 пространства на ПК
              minWidth: '300px', // Минимальная ширина
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
                padding: '60px 40px'
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px',
                  background: 'var(--gradient-pink)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '30px'
                }}>
                  <FaMapMarkerAlt size={30} style={{ color: 'white' }} />
                </div>
                <div style={{ 
                  fontSize: '13px', 
                  letterSpacing: '2px', 
                  marginBottom: '15px',
                  color: 'var(--color-accent)',
                  fontWeight: '500',
                  textTransform: 'uppercase'
                }}>
                  ОТКРЫТЬ КАРТУ
                </div>
                <div style={{ 
                  fontSize: '14px', 
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
                flex: '1', // Занимает 1/3 пространства на ПК
                minWidth: '300px', // Минимальная ширина для мобильной версии
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
                            color: 'var(--color-dark-gray)',
                            transition: 'all 0.3s ease'
                          }} 
                        />
                      </div>
                      <span className="social-text" style={{ 
                        fontSize: '14px',
                        fontWeight: '400',
                        color: 'var(--color-dark-gray)',
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
                            color: 'var(--color-dark-gray)',
                            transition: 'all 0.3s ease'
                          }} 
                        />
                      </div>
                      <span className="social-text" style={{ 
                        fontSize: '14px',
                        fontWeight: '400',
                        color: 'var(--color-dark-gray)',
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
                <Link 
                  to="/contact" 
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
                    textAlign: 'center'
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPreview;