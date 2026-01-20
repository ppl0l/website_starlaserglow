import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const titleRef = useRef(null);
  const lettersRef = useRef([]);
  const gradientRef = useRef(null);

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

  return (
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
        paddingTop: '40px'
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
            {/* STAR - первая строка */}
            <div style={{
              position: 'relative',
              marginBottom: '-5px' // Уменьшаем расстояние между строками
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
            
            {/* LASER - вторая строка */}
            <div style={{
              position: 'relative',
              marginBottom: '-5px' // Уменьшаем расстояние между строками
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
            
            {/* GLOW - третья строка */}
            <div style={{
              position: 'relative',
              marginTop: '-5px' // Поднимаем третью строку ближе ко второй
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
                      color: '#FF007A', // РОЗОВЫЙ ЦВЕТ
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
            <Link 
              to="/contact" 
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
                zIndex: '20'
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
            </Link>
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
  );
}

export default Hero;