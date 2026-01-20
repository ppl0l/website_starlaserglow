import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function MassageServices() {
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

const handleBookClick = (serviceTitle, subtitle = '', isCorrection = false) => {
  let fullServiceName = serviceTitle;
  
  if (isCorrection && subtitle) {
    // Для коррекции: только подзаголовок
    fullServiceName = subtitle;
  } else if (subtitle) {
    // Для других: оба названия
    fullServiceName = `${serviceTitle} - ${subtitle}`;
  }
  
  // Определяем категорию
  let category = 'Аппаратный массаж';
  if (isCorrection) {
    category = 'Аппаратная коррекция фигуры';
  }
  
  // Сохраняем название услуги с категорией
  localStorage.setItem('selectedService', `${category}: ${fullServiceName}`);
  // Переходим на страницу контактов
  navigate('/contact');
};

  const services = [
    {
      title: "Вакуумный массаж",
      time: "30 мин",
      description: "Глубокий лимфодренажный массаж с помощью вакуумных банок. Борьба с целлюлитом и отеками.",
      features: [
        "Уменьшение объемов",
        "Борьба с целлюлитом",
        "Лимфодренаж",
        "Улучшение тонуса кожи"
      ],
      price: [
        { type: "1 сеанс", value: "1 100 ₽" },
        { type: "5 сеансов", value: "4 900 ₽" },
        { type: "10 сеансов", value: "9 300 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Биофотон",
      time: "30 мин",
      description: "Световая терапия для коррекции фигуры и улучшения состояния кожи.",
      features: [
        "Коррекция фигуры",
        "Улучшение метаболизма",
        "Стимуляция коллагена",
        "Антиоксидантный эффект"
      ],
      price: [
        { type: "1 сеанс", value: "1 000 ₽" },
        { type: "5 сеансов", value: "4 500 ₽" },
        { type: "10 сеансов", value: "8 500 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Кавитация",
      time: "30 мин",
      description: "Ультразвуковая липосакция без операции. Разрушение жировых клеток.",
      features: [
        "Локальное похудение",
        "Уменьшение жировых отложений",
        "Без реабилитации",
        "Безоперационный метод"
      ],
      price: [
        { type: "1 сеанс", value: "1 200 ₽" },
        { type: "4 сеанса", value: "4 300 ₽" },
        { type: "8 сеансов", value: "8 100 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Вакуумный массаж + Биофотон",
      time: "60 мин",
      description: "Комплексная процедура для максимального эффекта в коррекции фигуры.",
      features: [
        "Двойное воздействие",
        "Ускоренный результат",
        "Комплексный подход",
        "Экономия времени"
      ],
      price: [
        { type: "1 сеанс", value: "1 300 ₽" },
        { type: "5 сеансов", value: "5 800 ₽" },
        { type: "10 сеансов", value: "11 000 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Вакуумный массаж + УЗ кавитация",
      time: "60 мин",
      description: "Комбинированная процедура вакуумного массажа с ультразвуковой кавитацией для усиленного эффекта.",
      features: [
        "Двойное воздействие",
        "Максимальная эффективность",
        "Глубокая проработка тканей",
        "Ускорение результатов"
      ],
      price: [
        { type: "1 сеанс", value: "1 600 ₽" },
        { type: "4 сеанса", value: "5 700 ₽" },
        { type: "8 сеансов", value: "10 800 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Вибромассаж",
      time: "45 мин",
      description: "Интенсивный вибрационный массаж для глубокой проработки мышц и улучшения кровообращения.",
      features: [
        "Расслабление мышц",
        "Улучшение кровообращения",
        "Снятие напряжения",
        "Повышение эластичности кожи"
      ],
      price: [
        { type: "1 сеанс", value: "1 500 ₽" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Стратосфера для тела",
      time: "30 мин",
      description: "Инновационная процедура для коррекции фигуры и улучшения качества кожи тела.",
      features: [
        "Комплексное воздействие",
        "Коррекция контуров",
        "Улучшение текстуры кожи",
        "Современная технология"
      ],
      price: [
        { type: "1 сеанс", value: "3 500 ₽" },
        { type: "6 сеансов", value: "18 900 ₽" },
        { type: "8 сеансов", value: "23 800 ₽" },
        { type: "10 сеансов", value: "28 000 ₽" }
      ],
      badgeColor: "var(--color-accent)"
    }
  ];

  const correctionServices = [
    {
      title: "Аппаратная коррекция фигуры",
      subtitle: "Бедра полностью и ягодицы",
      time: "30 мин",
      description: "Комплексная коррекция бедер и ягодиц с использованием современных аппаратных технологий.",
      features: [
        "Коррекция объемов",
        "Улучшение формы",
        "Подтяжка кожи",
        "Локальное воздействие"
      ],
      price: [
        { type: "1 сеанс", value: "2 000 ₽" },
        { type: "5 сеансов", value: "8 500 ₽", bonus: "1 сеанс в подарок" },
        { type: "10 сеансов", value: "16 500 ₽", bonus: "2 сеанса в подарок" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Аппаратная коррекция фигуры",
      subtitle: "«Ушки» на талии и живот",
      time: "30 мин",
      description: "Коррекция проблемных зон на талии и животе для создания гармоничного силуэта.",
      features: [
        "Уменьшение жировых отложений",
        "Коррекция талии",
        "Подтяжка кожи живота",
        "Формирование талии"
      ],
      price: [
        { type: "1 сеанс", value: "1 500 ₽" },
        { type: "5 сеансов", value: "6 500 ₽", bonus: "1 сеанс в подарок" },
        { type: "10 сеансов", value: "12 700 ₽", bonus: "2 сеанса в подарок" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Аппаратная коррекция фигуры",
      subtitle: "Плечи («крылья» на внутренней поверхности плеча)",
      time: "15 мин",
      description: "Точечная коррекция внутренней поверхности плеч для изящных контуров.",
      features: [
        "Коррекция формы плеч",
        "Уменьшение объемов",
        "Тонизирование кожи",
        "Точечное воздействие"
      ],
      price: [
        { type: "1 сеанс", value: "700 ₽" },
        { type: "5 сеансов", value: "3 000 ₽", bonus: "1 сеанс в подарок" },
        { type: "10 сеансов", value: "5 900 ₽", bonus: "2 сеанса в подарок" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Аппаратная коррекция фигуры",
      subtitle: "Зона шеи «Вдовий горбик»",
      time: "15 мин",
      description: "Коррекция зоны шеи и устранение «вдовьего горбика» для эстетичного контура.",
      features: [
        "Устранение горбика",
        "Коррекция линии шеи",
        "Улучшение осанки",
        "Эстетический эффект"
      ],
      price: [
        { type: "1 сеанс", value: "700 ₽" },
        { type: "5 сеансов", value: "3 000 ₽", bonus: "1 сеанс в подарок" },
        { type: "10 сеансов", value: "5 900 ₽", bonus: "2 сеанса в подарок" }
      ],
      badgeColor: "var(--color-black)"
    },
    {
      title: "Аппаратная коррекция фигуры",
      subtitle: "Спина полностью и зона шеи «Вдовий горбик»",
      time: "30 мин",
      description: "Комплексная коррекция спины и шеи для формирования красивой линии спины.",
      features: [
        "Коррекция спины",
        "Устранение горбика",
        "Улучшение осанки",
        "Комплексное воздействие"
      ],
      price: [
        { type: "1 сеанс", value: "1 500 ₽" },
        { type: "5 сеансов", value: "6 500 ₽", bonus: "1 сеанс в подарок" },
        { type: "10 сеансов", value: "12 700 ₽", bonus: "2 сеанса в подарок" }
      ],
      badgeColor: "var(--color-accent)"
    },
    {
      title: "Аппаратная коррекция фигуры",
      subtitle: "Все тело",
      time: "1 час 10 мин",
      description: "Полная аппаратная коррекция фигуры для комплексного преображения.",
      features: [
        "Комплексное воздействие",
        "Все проблемные зоны",
        "Максимальный результат",
        "Экономия времени"
      ],
      price: [
        { type: "1 сеанс", value: "4 600 ₽" },
        { type: "5 сеансов", value: "19 200 ₽", bonus: "1 сеанс в подарок" },
        { type: "10 сеансов", value: "38 500 ₽", bonus: "2 сеанса в подарок" }
      ],
      badgeColor: "var(--color-black)"
    }
  ];

  const renderPriceBlock = (price) => {
    return (
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
          {price.map((p, idx) => (
            <div key={idx} style={{ 
              background: 'rgba(0, 0, 0, 0.03)',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(0, 0, 0, 0)',
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
              {p.bonus && (
                <div style={{
                  fontSize: '10px',
                  fontWeight: '600',
                  color: 'var(--color-accent)',
                  marginTop: '4px',
                  padding: '2px 6px',
                  background: 'rgba(255, 0, 122, 0.1)',
                  borderRadius: '4px',
                  display: 'inline-block'
                }}>
                  {p.bonus}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="section-light" style={{ 
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
            <h2 id="massage" style={{ 
              marginBottom: '30px', 
              color: 'var(--color-black)',
              fontSize: 'clamp(2rem, 5vw, 3rem)'
            }}>
              Аппаратный массаж
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
              Современные технологии коррекции фигуры без операций. Эффективное воздействие 
              на проблемные зоны для достижения желаемых форм.
            </p>
          </div>
        </div>
        
<div className="grid-huge" style={{ gap: '30px', marginBottom: '80px' }}>
  {services.map((service, index) => {
    // Определяем позицию для Стратосферы
    if (service.title === "Стратосфера для тела") {
      return (
        <div 
          key={`service-${index}`}
          style={{ 
            gridColumn: '5 / span 4', // Начинается с 5 колонки, занимает 4
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
              <div>
                <h3 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--color-black)',
                  marginBottom: '5px'
                }}>
                  {service.title}
                </h3>
              </div>
              <span style={{ 
                fontSize: '11px',
                fontWeight: '500',
                letterSpacing: '2px',
                padding: '6px 12px',
                background: service.badgeColor,
                color: service.badgeColor === 'var(--color-black)' ? 'var(--color-white)' : 'var(--color-white)',
                borderRadius: '20px',
                textTransform: 'uppercase'
              }}>
                {service.time}
              </span>
            </div>
            
            <p style={{ 
              marginBottom: '20px',
              opacity: '0.7',
              color: 'var(--color-dark-gray)',
              fontSize: '16px',
              lineHeight: '1.6',
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
                  Преимущества:
                </div>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: '0',
                  margin: '0'
                }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ 
                      fontSize: '14px',
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
            
            {renderPriceBlock(service.price)}
            
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
      );
    }
    
    // Для всех остальных услуг
    return (
      <div 
        key={`service-${index}`}
        style={{ 
          gridColumn: 'span 4',
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
            <div>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--color-black)',
                marginBottom: '5px'
              }}>
                {service.title}
              </h3>
            </div>
            <span style={{ 
              fontSize: '11px',
              fontWeight: '500',
              letterSpacing: '2px',
              padding: '6px 12px',
              background: service.badgeColor,
              color: service.badgeColor === 'var(--color-black)' ? 'var(--color-white)' : 'var(--color-white)',
              borderRadius: '20px',
              textTransform: 'uppercase'
            }}>
              {service.time}
            </span>
          </div>
          
          <p style={{ 
            marginBottom: '20px',
            opacity: '0.7',
            color: 'var(--color-dark-gray)',
            fontSize: '16px',
            lineHeight: '1.6',
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
                Преимущества:
              </div>
              <ul style={{ 
                listStyle: 'none', 
                padding: '0',
                margin: '0'
              }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    fontSize: '14px',
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
          
          {renderPriceBlock(service.price)}
          
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
    );
  })}
</div>
        
        <div className="grid-huge" style={{ gap: '30px' }}>
          {correctionServices.map((service, index) => (
            <div 
              key={`correction-${index}`}
              style={{ 
                gridColumn: 'span 4',
                cursor: 'pointer'
              }}
              ref={el => cardsRef.current[services.length + index] = el}
              onMouseEnter={() => handleCardHover(services.length + index, true)}
              onMouseLeave={() => handleCardHover(services.length + index, false)}
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
                  <div>
                    <h3 style={{ 
                      fontSize: '1.3rem', 
                      fontWeight: '600',
                      color: 'var(--color-black)',
                      marginBottom: '5px'
                    }}>
                      {service.title}
                    </h3>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: 'var(--color-accent)',
                      marginBottom: '10px'
                    }}>
                      {service.subtitle}
                    </div>
                  </div>
                  <span style={{ 
                    fontSize: '11px',
                    fontWeight: '500',
                    letterSpacing: '2px',
                    padding: '6px 12px',
                    background: service.badgeColor,
                    color: service.badgeColor === 'var(--color-black)' ? 'var(--color-white)' : 'var(--color-white)',
                    borderRadius: '20px',
                    textTransform: 'uppercase'
                  }}>
                    {service.time}
                  </span>
                </div>
                
                <p style={{ 
                  marginBottom: '20px',
                  opacity: '0.7',
                  color: 'var(--color-dark-gray)',
                  fontSize: '15px',
                  lineHeight: '1.6',
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
                      Эффект:
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
                
                {renderPriceBlock(service.price)}
                
                <button
                  onClick={() => handleBookClick(service.title, service.subtitle, true)}
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

export default MassageServices;