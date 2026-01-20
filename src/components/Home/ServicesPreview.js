import { useRef } from 'react';
import { Link } from 'react-router-dom';

function ServicesPreview() {
  const cardsRef = useRef([]);

  const handleCardHover = (index, isHovering) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    card.style.transform = isHovering ? 'translateY(-10px)' : 'translateY(0)';
    card.style.boxShadow = isHovering 
      ? '0 30px 60px rgba(0, 0, 0, 0.1)' 
      : '0 5px 15px rgba(0, 0, 0, 0.05)';
    
    // Изменение цвета номера при наведении
    const numberElement = card.querySelector('.service-number');
    if (numberElement) {
      numberElement.style.opacity = isHovering ? '0.2' : '0.1';
    }
  };

  const services = [
    {
      number: '01',
      title: 'Лазерная эпиляция',
      description: 'Диодный лазер нового поколения для всех фототипов кожи. Быстро, безопасно, эффективно.',
      color: '#FF007A',
      anchor: 'laser' // Добавляем якорь
    },
    {
      number: '02',
      title: 'Аппаратный массаж',
      description: 'Современные технологии коррекции фигуры. Вакуум, кавитация, лимфодренаж.',
      color: '#000000',
      anchor: 'massage' // Добавляем якорь
    },
    {
      number: '03',
      title: 'Косметология лица',
      description: 'Профессиональный уход за кожей. Чистки, пилинги, омоложение.',
      color: '#000000',
      anchor: 'cosmetology' // Добавляем якорь
    }
  ];

  return (
    <section className="section-huge" style={{ position: 'relative' }}>
      {/* Фоновые элементы */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(255, 0, 122, 0.04) 0%, transparent 70%)',
        filter: 'blur(25px)',
        opacity: '0.4',
        zIndex: '1',
        pointerEvents: 'none'
      }} />
      
      <div className="container-huge" style={{ position: 'relative', zIndex: '2' }}>
        <div className="grid-huge" style={{ marginBottom: '80px' }}>
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
            <h2 style={{ 
              marginBottom: '30px', 
              color: 'var(--color-black)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)'
            }}>
              Основные направления
            </h2>
          </div>
          
          <div style={{ gridColumn: 'span 8' }}>
            <p style={{ 
              fontSize: '18px', 
              fontWeight: '300',
              opacity: '0.8',
              color: 'var(--color-dark-gray)',
              maxWidth: '600px'
            }}>
              Комплексный подход к эстетике с использованием передовых технологий 
              и индивидуальных программ ухода для каждого клиента.
            </p>
          </div>
        </div>
        
        <div className="grid-huge" style={{ gap: '30px' }}>
          {services.map((service, index) => (
            <div 
              key={index}
              style={{ 
                gridColumn: 'span 4',
                cursor: 'pointer'
              }}
              ref={el => cardsRef.current[index] = el}
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              {/* Используем Link с якорем для навигации */}
              <Link 
                to={`/services#${service.anchor}`}
                style={{ 
                  textDecoration: 'none',
                  display: 'block',
                  height: '100%'
                }}
              >
                <div className="card-huge" style={{ 
                  height: '100%',
                  transition: 'all 0.3s ease'
                }}>
                  <div 
                    className="service-number"
                    style={{
                      fontSize: '72px',
                      fontWeight: '700',
                      color: service.color,
                      marginBottom: '20px',
                      opacity: '0.1',
                      lineHeight: '1',
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    {service.number}
                  </div>
                  
                  <h3 style={{ 
                    marginBottom: '20px', 
                    color: 'var(--color-black)',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{ 
                    marginBottom: '30px', 
                    opacity: '0.7',
                    color: 'var(--color-dark-gray)',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}>
                    {service.description}
                  </p>
                  
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: '12px',
                    fontWeight: '500',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: service.color === '#000000' ? 'var(--color-black)' : service.color,
                    transition: 'color 0.3s ease'
                  }}>
                    Подробнее
                    <span style={{ 
                      marginLeft: '10px',
                      transition: 'transform 0.3s ease'
                    }}>→</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;