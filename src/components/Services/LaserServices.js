import { useRef, useState } from 'react';
import { FaInstagram, FaTelegram, FaWhatsapp, FaCalendarAlt, FaTimes, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

function LaserServices() {
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

  const handleBookClick = (serviceTitle, category = '') => {
    // Определяем категорию
    const serviceCategory = category || 'Лазерная эпиляция';
    // Сохраняем название услуги с категорией
    const fullServiceName = `${serviceCategory}: ${serviceTitle}`;
    setSelectedService(fullServiceName);
    localStorage.setItem('selectedService', fullServiceName);
    // Показываем модальное окно
    setShowModal(true);
  };

  const handleYclientsClick = () => {
    window.open(contactInfo.yclientsUrl, '_blank');
    setShowModal(false);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const faceServices = [
    {
      title: "Любая зона лица",
      time: "15 мин",
      description: "Эпиляция любой выбранной зоны на лице.",
      price: [
        { type: "1 сеанс", value: "690 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Лицо полностью",
      time: "30 мин",
      description: "Полная эпиляция всех зон лица.",
      price: [
        { type: "1 сеанс", value: "1 790 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Руки до/выше локтя",
      time: "30 мин",
      description: "Эпиляция рук до или выше локтя.",
      price: [
        { type: "1 сеанс", value: "1 790 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Руки полностью",
      time: "30 мин",
      description: "Полная эпиляция рук от плеча до кисти.",
      price: [
        { type: "1 сеанс", value: "2 290 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Кисти и пальцы рук",
      time: "15 мин",
      description: "Эпиляция кистей и пальцев рук.",
      price: [
        { type: "1 сеанс", value: "690 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Подмышечные впадины",
      time: "15 мин",
      description: "Эпиляция подмышечных впадин.",
      price: [
        { type: "1 сеанс", value: "1 090 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Линия живота",
      time: "15 мин",
      description: "Эпиляция линии живота.",
      price: [
        { type: "1 сеанс", value: "690 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Живот полностью",
      time: "30 мин",
      description: "Полная эпиляция живота.",
      price: [
        { type: "1 сеанс", value: "1 290 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Декольте",
      time: "15 мин",
      description: "Эпиляция зоны декольте.",
      price: [
        { type: "1 сеанс", value: "1 090 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Ареолы",
      time: "15 мин",
      description: "Эпиляция ареол.",
      price: [
        { type: "1 сеанс", value: "690 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Поясница",
      time: "15 мин",
      description: "Эпиляция поясничной области.",
      price: [
        { type: "1 сеанс", value: "1 290 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Спина полностью",
      time: "30 мин",
      description: "Полная эпиляция спины.",
      price: [
        { type: "1 сеанс", value: "2 390 ₽" }
      ],
      badgeColor: "var(--color-black)"
    }
  ];

  const bodyServices = [
    {
      title: "Классическое бикини",
      time: "15 мин",
      description: "Эпиляция зоны классического бикини.",
      price: [
        { type: "1 сеанс", value: "1 590 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Тотальное бикини",
      time: "30 мин",
      description: "Полная эпиляция зоны бикини.",
      price: [
        { type: "1 сеанс", value: "2 090 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Межъягодичная область",
      time: "15 мин",
      description: "Эпиляция межъягодичной области.",
      price: [
        { type: "1 сеанс", value: "990 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Ягодицы",
      time: "15 мин",
      description: "Эпиляция ягодиц.",
      price: [
        { type: "1 сеанс", value: "1 190 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Бедра",
      time: "30 мин",
      description: "Эпиляция бедер полностью.",
      price: [
        { type: "1 сеанс", value: "2 590 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Голени",
      time: "30 мин",
      description: "Эпиляция голеней.",
      price: [
        { type: "1 сеанс", value: "2 190 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Стопы и пальцы ног",
      time: "15 мин",
      description: "Эпиляция стоп и пальцев ног.",
      price: [
        { type: "1 сеанс", value: "690 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Ноги полностью",
      time: "30 мин",
      description: "Полная эпиляция ног от бедра до стопы.",
      price: [
        { type: "1 сеанс", value: "3 090 ₽" }
      ],
      badgeColor: "var(--color-black)"
    }
  ];

  // ОБНОВЛЕННЫЕ КОМПЛЕКСЫ ИЗ PDF
  const complexPrograms = [
    {
      title: "Подмышечные впадины + Тотальное бикини",
      time: "30 мин",
      description: "Лазерная эпиляция двух зон.",
      price: [
        { type: "1 сеанс", value: "2 890 ₽" },
        { type: "5 сеансов", value: "13 000 ₽" },
        { type: "8 сеансов", value: "19 600 ₽" },
        { type: "10 сеансов", value: "23 100 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Подмышечные впадины + Голени",
      time: "30 мин",
      description: "Лазерная эпиляция: подмышки + голени.",
      price: [
        { type: "1 сеанс", value: "2 990 ₽" },
        { type: "5 сеансов", value: "13 400 ₽" },
        { type: "8 сеансов", value: "20 300 ₽" },
        { type: "10 сеансов", value: "23 900 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Классическое бикини + Голени",
      time: "30 мин",
      description: "Лазерная эпиляция: классическое бикини + голени.",
      price: [
        { type: "1 сеанс", value: "2 590 ₽" },
        { type: "5 сеансов", value: "11 600 ₽" },
        { type: "8 сеансов", value: "17 600 ₽" },
        { type: "10 сеансов", value: "20 700 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Подмышечные впадины + Тотальное бикини + Голени",
      time: "30 мин",
      description: "Лазерная эпиляция трех зон.",
      price: [
        { type: "1 сеанс", value: "3 590 ₽" },
        { type: "5 сеансов", value: "16 100 ₽" },
        { type: "8 сеансов", value: "24 400 ₽" },
        { type: "10 сеансов", value: "28 700 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Подмышечные впадины + Тотальное бикини + Ноги полностью",
      time: "30 мин",
      description: "Лазерная эпиляция ног полностью.",
      price: [
        { type: "1 сеанс", value: "4 590 ₽" },
        { type: "5 сеансов", value: "20 600 ₽" },
        { type: "8 сеансов", value: "31 200 ₽" },
        { type: "10 сеансов", value: "36 700 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Подмышечные впадины + Руки полностью + Тотальное бикини + Ноги полностью",
      time: "30 мин",
      description: "Полное удаление волос на теле.",
      price: [
        { type: "1 сеанс", value: "6 000 ₽" },
        { type: "5 сеансов", value: "27 000 ₽" },
        { type: "8 сеансов", value: "40 800 ₽" },
        { type: "10 сеансов", value: "48 000 ₽" }
      ],
      badgeColor: "var(--color-black)"
    }
  ];

  return (
    <>
      <div style={{ 
        padding: '80px 0',
        position: 'relative'
      }}>
        <div className="container-huge" style={{ position: 'relative', zIndex: '2' }}>
          {/* Главный заголовок */}
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
              <h2 id="laser" style={{ 
                marginBottom: '15px', 
                color: 'var(--color-black)',
                fontSize: 'clamp(2rem, 5vw, 3rem)'
              }}>
                Лазерная эпиляция
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
                Диодный лазер нового поколения для удаления волос на всех типах кожи. 
                Быстро, безопасно и эффективно с длительным результатом.
              </p>

              <p style={{ 
                fontSize: '14px', 
                fontWeight: '400',
                color: 'var(--color-accent)',
                maxWidth: '600px',
                lineHeight: '1.6',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
                }}>
                <span style={{
                  fontSize: '16px',
                  fontWeight: '600'
                }}>↓</span>
                Комплексные программы представлены ниже
              </p>
            </div>
          </div>

          {/* Лицо и верхняя часть тела */}
          <div className="grid-huge" style={{ marginBottom: '40px' }}>
            <div style={{ gridColumn: 'span 4' }}>
              <h3 style={{ 
                marginBottom: '30px', 
                color: 'var(--color-black)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '600'
              }}>
                Лицо и верхняя часть тела
              </h3>
            </div>
          </div>
          
          <div className="grid-huge" style={{ gap: '20px', marginBottom: '80px' }}>
            {faceServices.map((service, index) => (
              <div 
                key={index}
                style={{ 
                  gridColumn: 'span 3',
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
                    marginBottom: '15px'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: '600',
                      color: 'var(--color-black)'
                    }}>
                      {service.title}
                    </h3>
                    <span style={{ 
                      fontSize: '10px',
                      fontWeight: '500',
                      letterSpacing: '1px',
                      padding: '4px 8px',
                      background: service.badgeColor,
                      color: service.badgeColor === 'var(--color-black)' ? 'var(--color-white)' : 'var(--color-white)',
                      borderRadius: '15px',
                      textTransform: 'uppercase'
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
                  
                  {service.price && (
                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {service.price.map((p, idx) => (
                          <div key={idx} style={{ 
                            background: 'rgba(0, 0, 0, 0.03)',
                            padding: '6px 10px',
                            borderRadius: '6px',
                            flex: '1',
                            minWidth: '120px'
                          }}>
                            <div style={{ 
                              fontSize: '11px',
                              fontWeight: '500',
                              color: 'var(--color-dark-gray)',
                              opacity: '0.7',
                              marginBottom: '2px'
                            }}>
                              {p.type}
                            </div>
                            <div style={{ 
                              fontSize: '16px',
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
                  onClick={() => handleBookClick(service.title, 'Лазерная эпиляция')}
                  className="btn-huge"
                  style={{
                    fontSize: '10px',
                    fontWeight: '500',
                    letterSpacing: '1px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'block',
                    padding: '10px 16px',
                    border: '1px solid var(--color-accent)',
                    color: 'var(--color-accent)',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
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

          {/* Нижняя часть тела */}
          <div className="grid-huge" style={{ marginBottom: '40px' }}>
            <div style={{ gridColumn: 'span 4' }}>
              <h3 style={{ 
                marginBottom: '30px', 
                color: 'var(--color-black)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '600'
              }}>
                Нижняя часть тела
              </h3>
            </div>
          </div>
          
          <div className="grid-huge" style={{ gap: '20px', marginBottom: '100px' }}>
            {bodyServices.map((service, index) => (
              <div 
                key={index}
                style={{ 
                  gridColumn: 'span 3',
                  cursor: 'pointer'
                }}
                ref={el => cardsRef.current[faceServices.length + index] = el}
                onMouseEnter={() => handleCardHover(faceServices.length + index, true)}
                onMouseLeave={() => handleCardHover(faceServices.length + index, false)}
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
                    marginBottom: '15px'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: '600',
                      color: 'var(--color-black)'
                    }}>
                      {service.title}
                    </h3>
                    <span style={{ 
                      fontSize: '10px',
                      fontWeight: '500',
                      letterSpacing: '1px',
                      padding: '4px 8px',
                      background: service.badgeColor,
                      color: service.badgeColor === 'var(--color-black)' ? 'var(--color-white)' : 'var(--color-white)',
                      borderRadius: '15px',
                      textTransform: 'uppercase'
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
                  
                  {service.price && (
                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {service.price.map((p, idx) => (
                          <div key={idx} style={{ 
                            background: 'rgba(0, 0, 0, 0.03)',
                            padding: '6px 10px',
                            borderRadius: '6px',
                            flex: '1',
                            minWidth: '120px'
                          }}>
                            <div style={{ 
                              fontSize: '11px',
                              fontWeight: '500',
                              color: 'var(--color-dark-gray)',
                              opacity: '0.7',
                              marginBottom: '2px'
                            }}>
                              {p.type}
                            </div>
                            <div style={{ 
                              fontSize: '16px',
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
                  onClick={() => handleBookClick(service.title, 'Лазерная эпиляция')}
                  className="btn-huge"
                  style={{
                    fontSize: '10px',
                    fontWeight: '500',
                    letterSpacing: '1px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'block',
                    padding: '10px 16px',
                    border: '1px solid var(--color-accent)',
                    color: 'var(--color-accent)',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
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

          {/* Комплексные программы (6 штук) */}
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
                Выгодные предложения
              </div>
              <h3 style={{ 
                marginBottom: '30px', 
                color: 'var(--color-black)',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)'
              }}>
                Комплексные программы
              </h3>
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
                Специальные программы для комплексного ухода и экономии. 
                Зафиксируйте цену на весь курс и получите максимальный результат.
              </p>
            </div>
          </div>
          
          <div className="grid-huge" style={{ gap: '30px' }}>
            {complexPrograms.map((program, index) => (
              <div 
                key={index}
                style={{ 
                  gridColumn: 'span 4',
                  cursor: 'pointer'
                }}
                ref={el => cardsRef.current[faceServices.length + bodyServices.length + index] = el}
                onMouseEnter={() => handleCardHover(faceServices.length + bodyServices.length + index, true)}
                onMouseLeave={() => handleCardHover(faceServices.length + bodyServices.length + index, false)}
              >
                <div className="card-huge" style={{ 
                  height: '100%',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '2px solid var(--color-accent)',
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
                      {program.title}
                    </h3>
                    <span style={{ 
                      fontSize: '11px',
                      fontWeight: '500',
                      letterSpacing: '2px',
                      padding: '6px 12px',
                      background: program.badgeColor,
                      color: program.badgeColor === 'var(--color-black)' ? 'var(--color-white)' : 'var(--color-white)',
                      borderRadius: '20px',
                      textTransform: 'uppercase'
                    }}>
                      {program.time}
                    </span>
                  </div>
                  
                  <p style={{ 
                    marginBottom: '30px', 
                    opacity: '0.7',
                    color: 'var(--color-dark-gray)',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    flex: '1'
                  }}>
                    {program.description}
                  </p>
                  
                  {program.price && (
                    <div style={{ marginBottom: '30px' }}>
                      <div style={{ 
                        fontSize: '11px',
                        fontWeight: '500',
                        letterSpacing: '2px',
                        color: 'var(--color-dark-gray)',
                        marginBottom: '15px',
                        opacity: '0.7',
                        textTransform: 'uppercase'
                      }}>
                        Стоимость программы:
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {program.price.map((p, idx) => (
                          <div key={idx} style={{ 
                            background: 'rgba(0, 0, 0, 0.03)',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            border: '1px solid rgba(0, 0, 0, 0.05)'
                          }}>
                            <div style={{ 
                              fontSize: '12px',
                              fontWeight: '500',
                              color: 'var(--color-dark-gray)',
                              opacity: '0.7',
                              marginBottom: '5px'
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
                  onClick={() => handleBookClick(program.title, 'Комплексные программы')}
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
                  Купить программу
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

export default LaserServices;