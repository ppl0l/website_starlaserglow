import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function LaserServices() {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

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
  localStorage.setItem('selectedService', `${serviceCategory}: ${serviceTitle}`);
  // Переходим на страницу контактов
  navigate('/contact');
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
  );
}

export default LaserServices;