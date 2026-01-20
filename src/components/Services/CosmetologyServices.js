import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function CosmetologyServices() {
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

  const handleBookClick = (serviceTitle) => {
  localStorage.setItem('selectedService', `Косметология лица: ${serviceTitle}`);
    // Переходим на страницу контактов
    navigate('/contact');
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
  );
}

export default CosmetologyServices;