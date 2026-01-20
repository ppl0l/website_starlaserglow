import { useRef, useState } from 'react';
import { FaInstagram, FaTelegram, FaWhatsapp, FaCalendarAlt, FaTimes, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

function CosmetologyServices() {
  const cardsRef = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

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

  const handleCardHover = (index, isHovering) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    card.style.transform = isHovering ? 'translateY(-10px)' : 'translateY(0)';
    card.style.boxShadow = isHovering 
      ? '0 30px 60px rgba(0, 0, 0, 0.1)' 
      : '0 5px 15px rgba(0, 0, 0, 0.05)';
  };

  const handleBookClick = (serviceTitle) => {
    setSelectedService(`Косметология лица: ${serviceTitle}`);
    localStorage.setItem('selectedService', `Косметология лица: ${serviceTitle}`);
    setShowModal(true);
  };

  const handleYclientsClick = () => {
    window.open(contactInfo.yclientsUrl, '_blank');
    setShowModal(false);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  // ОБНОВЛЕННЫЕ УСЛУГИ ПО ДАННЫМ ИЗ PDF
  const services = [
    {
      title: "Чистка лица механическая",
      time: "1-1.5 часа",
      description: "Глубокая механическая чистка лица с полным очищением пор.",
      features: [
        "Полная очистка пор",
        "Удаление черных точек и комедонов",
        "Антибактериальная обработка",
        "Можно добавить пилинг (дополнительная стоимость)"
      ],
      price: [
        { type: "Основная процедура", value: "3 300 ₽" },
        { type: "Пилинг", value: "+ 1000 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Чистка лица ультразвуковая",
      time: "60 мин",
      description: "Безболезненная ультразвуковая чистка лица.",
      features: [
        "Без повреждения кожи",
        "Удаление загрязнений ультразвуком",
        "Щадящая процедура",
        "Можно добавить маску/пилинг"
      ],
      price: [
        { type: "Основная процедура", value: "3 000 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Пилинг по типу кожи",
      time: "30 мин",
      description: "Индивидуальный пилинг, подобранный по типу вашей кожи.",
      features: [
        "Индивидуальный подбор",
        "Безопасное отшелушивание",
        "Улучшение текстуры кожи",
        "Осветление и выравнивание тона"
      ],
      price: [
        { type: "Основная процедура", value: "3 500 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Пилинг BioRePeel",
      time: "30 мин",
      description: "Инновационный биоревитализирующий пилинг.",
      features: [
        "Стимуляция коллагена",
        "Без реабилитационного периода",
        "Осветление пигментации",
        "Увлажнение и лифтинг"
      ],
      price: [
        { type: "Основная процедура", value: "4 000 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Пилинг PRX-T33",
      time: "30 мин",
      description: "Профессиональный пилинг для глубокого омоложения.",
      features: [
        "Глубокое обновление кожи",
        "Коррекция морщин и рубцов",
        "Улучшение плотности кожи",
        "Профессиональный результат"
      ],
      price: [
        { type: "Основная процедура", value: "5 000 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Массаж лица",
      time: "40-50 мин",
      description: "Профессиональный массаж для тонуса и омоложения лица.",
      features: [
        "Лимфодренажный эффект",
        "Улучшение микроциркуляции",
        "Повышение тонуса кожи",
        "Можно добавить маску (дополнительная стоимость)"
      ],
      price: [
        { type: "Основная процедура", value: "2 000 ₽" },
        { type: "Маска", value: "+ 700 ₽" }
      ],
      badgeColor: "var(--color-black)"
    }
  ];

  return (
    <>
      <div style={{ 
        padding: '80px 0',
        position: 'relative',
        marginBottom: '80px'
      }}>
        <div className="container-huge" style={{ position: 'relative', zIndex: '2' }}>
          <div className="grid-huge" style={{ marginBottom: '60px' }}>
            <div style={{ gridColumn: 'span 4' }}>
              <div style={{
                fontSize: '12px',
                letterSpacing: '2px',
                color: 'var(--color-accent)',
                marginBottom: '20px',
                fontWeight: '500',
                textTransform: 'uppercase'
              }}>
                Услуги
              </div>
              <h2 id="cosmetology" style={{ 
                marginBottom: '30px', 
                color: 'var(--color-black)',
                fontSize: 'clamp(2rem, 5vw, 3rem)'
              }}>
                Косметология лица
              </h2>
            </div>
            
            <div style={{ gridColumn: 'span 8' }}>
              <p style={{ 
                fontSize: '18px', 
                fontWeight: '300',
                opacity: '0.8',
                color: 'var(--color-dark-gray)',
                maxWidth: '600px',
                lineHeight: '1.6'
              }}>
                Профессиональный уход за кожей лица с использованием современных технологий 
                и индивидуальных программ. От глубокого очищения до комплексного омоложения.
              </p>
            </div>
          </div>
          
          {/* ОБНОВЛЕННАЯ СЕТКА ДЛЯ 6 УСЛУГ */}
          <div className="grid-huge" style={{ gap: '30px', marginBottom: '40px' }}>
            {services.map((service, index) => (
              <div 
                key={index}
                style={{ 
                  gridColumn: 'span 4', // Каждая карточка занимает 4 колонки из 12
                  cursor: 'pointer'
                }}
                ref={el => cardsRef.current[index] = el}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
              >
                <div className="card-huge" style={{ 
                  height: '100%',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '25px'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '20px'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.3rem', 
                      fontWeight: '600',
                      color: 'var(--color-black)',
                      lineHeight: '1.3'
                    }}>
                      {service.title}
                    </h3>
                    <span style={{ 
                      fontSize: '11px',
                      fontWeight: '500',
                      letterSpacing: '2px',
                      padding: '6px 12px',
                      background: service.badgeColor,
                      color: service.badgeColor === 'var(--color-black)' ? 'var(--color-white)' : 'var(--color-white)',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap'
                    }}>
                      {service.time}
                    </span>
                  </div>
                  
                  <p style={{ 
                    marginBottom: '20px', 
                    opacity: '0.7',
                    color: 'var(--color-dark-gray)',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    flex: '1'
                  }}>
                    {service.description}
                  </p>
                  
                  {service.features && (
                    <div style={{ marginBottom: '25px' }}>
                      <div style={{ 
                        fontSize: '10px',
                        fontWeight: '500',
                        letterSpacing: '1.5px',
                        color: 'var(--color-dark-gray)',
                        marginBottom: '12px',
                        opacity: '0.7',
                        textTransform: 'uppercase'
                      }}>
                        Особенности:
                      </div>
                      <ul style={{ 
                        listStyle: 'none', 
                        padding: '0',
                        margin: '0'
                      }}>
                        {service.features.map((feature, idx) => (
                          <li key={idx} style={{ 
                            fontSize: '13px',
                            color: 'var(--color-dark-gray)',
                            marginBottom: '6px',
                            paddingLeft: '18px',
                            position: 'relative',
                            lineHeight: '1.4'
                          }}>
                            <span style={{
                              position: 'absolute',
                              left: '0',
                              color: 'var(--color-accent)',
                              fontSize: '12px'
                            }}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {service.price && (
                    <div style={{ marginBottom: '25px' }}>
                      <div style={{ 
                        fontSize: '10px',
                        fontWeight: '500',
                        letterSpacing: '1.5px',
                        color: 'var(--color-dark-gray)',
                        marginBottom: '12px',
                        opacity: '0.7',
                        textTransform: 'uppercase'
                      }}>
                        Стоимость:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {service.price.map((p, idx) => (
                          <div key={idx} style={{ 
                            background: 'rgba(0, 0, 0, 0.03)',
                            padding: '10px 14px',
                            borderRadius: '8px',
                            flex: '1',
                            minWidth: '140px'
                          }}>
                            <div style={{ 
                              fontSize: '11px',
                              fontWeight: '500',
                              color: 'var(--color-dark-gray)',
                              opacity: '0.7',
                              marginBottom: '4px'
                            }}>
                              {p.type}
                            </div>
                            <div style={{ 
                              fontSize: '18px',
                              fontWeight: '600',
                              color: 'var(--color-accent)'
                            }}>
                              {p.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <button
                    onClick={() => handleBookClick(service.title)}
                    className="btn-huge"
                    style={{
                      fontSize: '11px',
                      fontWeight: '500',
                      letterSpacing: '2px',
                      textDecoration: 'none',
                      textAlign: 'center',
                      display: 'block',
                      padding: '12px 24px',
                      border: '1px solid var(--color-accent)',
                      color: 'var(--color-accent)',
                      background: 'transparent',
                      transition: 'all 0.3s ease',
                      marginTop: 'auto',
                      cursor: 'pointer',
                      width: '100%'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'var(--color-accent)';
                      e.currentTarget.style.color = 'var(--color-white)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--color-accent)';
                    }}
                  >
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
          {selectedService && (
            <div style={{ 
              marginBottom: '25px',
              padding: '15px',
              background: 'rgba(255, 0, 122, 0.05)',
              borderLeft: '4px solid var(--color-accent)',
              borderRadius: '0 8px 8px 0'
            }}>
              <div style={{ 
                fontSize: '11px',
                letterSpacing: '1.5px',
                color: 'var(--color-accent)',
                marginBottom: '8px',
                fontWeight: '500',
                textTransform: 'uppercase'
              }}>
                ВЫБРАННАЯ УСЛУГА
              </div>
              <div style={{ 
                fontSize: '16px', 
                fontWeight: '500', 
                color: 'var(--color-black)',
                lineHeight: '1.4'
              }}>
                {selectedService}
              </div>
            </div>
          )}
          
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

export default CosmetologyServices;