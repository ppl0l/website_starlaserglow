import { useRef, useState } from 'react';
import { FaInstagram, FaTelegram, FaWhatsapp, FaCalendarAlt, FaTimes, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

function MassageServices() {
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

  const handleBookClick = (serviceTitle, subtitle = '', isCorrection = false) => {
    let fullServiceName = serviceTitle;
    
    if (isCorrection && subtitle) {
      fullServiceName = subtitle;
    } else if (subtitle) {
      fullServiceName = `${serviceTitle} - ${subtitle}`;
    }
    
    let category = 'Аппаратный массаж';
    if (isCorrection) {
      category = 'Аппаратная коррекция фигуры';
    }
    
    const serviceWithCategory = `${category}: ${fullServiceName}`;
    setSelectedService(serviceWithCategory);
    localStorage.setItem('selectedService', serviceWithCategory);
    setShowModal(true);
  };

  const handleYclientsClick = () => {
    window.open(contactInfo.yclientsUrl, '_blank');
    setShowModal(false);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
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
      badgeColor: "var(--color-black)",
      isVibromassage: true
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

  const renderServiceCard = (service, index, isCorrection = false) => {
    const isVibromassage = service.title === "Вибромассаж" && !isCorrection;
    
    return (
      <div 
        key={isCorrection ? `correction-${index}` : `service-${index}`}
        className="service-card"
        style={{ 
          width: '100%',
          minWidth: '300px',
          cursor: 'pointer'
        }}
        ref={el => {
          if (isCorrection) {
            cardsRef.current[services.length + index] = el;
          } else {
            cardsRef.current[index] = el;
          }
        }}
        onMouseEnter={() => handleCardHover(isCorrection ? services.length + index : index, true)}
        onMouseLeave={() => handleCardHover(isCorrection ? services.length + index : index, false)}
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
            marginBottom: isCorrection || isVibromassage ? '15px' : '20px'
          }}>
            <div>
              {!isCorrection ? (
                // Для обычных услуг - черный заголовок
                <h3 style={{ 
                  fontSize: isVibromassage ? '1.3rem' : '1.5rem',
                  fontWeight: '600',
                  color: 'var(--color-black)',
                  marginBottom: '5px'
                }}>
                  {service.title}
                </h3>
              ) : (
                // Для коррекции - черный заголовок "Аппаратная коррекция фигуры" 
                // и розовый подзаголовок
                <div>
                  <h3 style={{ 
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--color-black)',
                    marginBottom: '5px'
                  }}>
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: 'var(--color-accent)',
                      marginBottom: '10px'
                    }}>
                      {service.subtitle}
                    </div>
                  )}
                </div>
              )}
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
            marginBottom: isVibromassage ? '0px' : '20px',
            opacity: '0.7',
            color: 'var(--color-dark-gray)',
            fontSize: isCorrection || isVibromassage ? '15px' : '16px',
            lineHeight: '1.6',
            flex: isVibromassage ? '0' : '1'
          }}>
            {service.description}
          </p>
          
          {/* Особый порядок для вибромассажа - преимущества сразу после описания */}
          {isVibromassage && service.features && (
            <div style={{ marginBottom: '20px', flex: '1' }}>
              <div style={{ 
                fontSize: '10px',
                fontWeight: '500',
                letterSpacing: '1.5px',
                color: 'var(--color-dark-gray)',
                marginBottom: '12px',
                opacity: '0.7',
                textTransform: 'uppercase',
                marginTop: '15px'
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
          
          {/* Обычный порядок для других услуг */}
          {!isVibromassage && service.features && (
            <div style={{ marginBottom: '25px', flex: '1' }}>
              <div style={{ 
                fontSize: '10px',
                fontWeight: '500',
                letterSpacing: '1.5px',
                color: 'var(--color-dark-gray)',
                marginBottom: '12px',
                opacity: '0.7',
                textTransform: 'uppercase'
              }}>
                {isCorrection ? 'Эффект:' : 'Преимущества:'}
              </div>
              <ul style={{ 
                listStyle: 'none', 
                padding: '0',
                margin: '0'
              }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    fontSize: isCorrection ? '13px' : '14px',
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
            onClick={() => handleBookClick(service.title, service.subtitle, isCorrection)}
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
  };

  return (
    <>
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
          
          {/* Аппаратный массаж - адаптивная сетка */}
          <div className="services-grid">
            {services.map((service, index) => renderServiceCard(service, index, false))}
          </div>
          
          {/* Аппаратная коррекция фигуры - адаптивная сетка */}
          <div className="correction-grid">
            {correctionServices.map((service, index) => renderServiceCard(service, index, true))}
          </div>
        </div>

        {/* CSS для адаптивной сетки */}
        <style jsx>{`
          .services-grid,
          .correction-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-bottom: 80px;
          }
          
          /* Стратосфера в центре на десктопе */
          .services-grid > .service-card:nth-child(7) {
            grid-column: 2;
          }
          
          /* Планшетная версия (до 992px) */
          @media (max-width: 992px) {
            .services-grid,
            .correction-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .services-grid > .service-card:nth-child(7) {
              grid-column: auto;
            }
          }
          
          /* Мобильная версия (до 768px) */
          @media (max-width: 768px) {
            .services-grid,
            .correction-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
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

export default MassageServices;