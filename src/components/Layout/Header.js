import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    checkMobile();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
  };

  const handleLogoHover = (e) => {
    const letters = e.currentTarget.querySelectorAll('.logo-letter');
    letters.forEach((letter, index) => {
      if (index >= 4) { // Буквы GLOW (индексы 5-9)
        letter.style.transform = `translateY(-5px) rotate(${index % 2 === 0 ? -5 : 5}deg) scale(1.05)`;
      } else {
        letter.style.transform = `translateY(-5px) rotate(${index % 2 === 0 ? -5 : 5}deg)`;
      }
    });
  };

  const handleLogoLeave = (e) => {
    const letters = e.currentTarget.querySelectorAll('.logo-letter');
    letters.forEach((letter) => {
      letter.style.transform = 'translateY(0) rotate(0deg) scale(1)';
    });
  };

  const getPagePath = (pageName) => {
    switch(pageName) {
      case 'Главная': return '/';
      case 'Услуги и цены': return '/services';
      case 'Контакты': return '/contact';
      default: return '/';
    }
  };

  const isActivePage = (pageName) => {
    const pagePath = getPagePath(pageName);
    return location.pathname === pagePath;
  };

  const logoLetters = 'STAR LASER GLOW'.split('');

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '0 40px',
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.05)' : 'none',
        height: '80px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Логотип слева - STAR черный, GLOW розовый */}
          <Link 
            to="/" 
            style={{
              fontSize: '24px',
              fontWeight: '700',
              textDecoration: 'none',
              position: 'absolute',
              left: '0',
              letterSpacing: '-0.5px',
              display: 'flex',
              alignItems: 'center'
            }}
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoLeave}
          >
            {logoLetters.map((letter, index) => {
              const isSpace = letter === ' ';
              const isGlowLetter = index >= 5; // Буквы G, L, O, W
              
              return (
                <span 
                  key={index} 
                  className="logo-letter"
                  style={{ 
                    display: 'inline-block',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    marginRight: isSpace ? '10px' : '0',
                    color: isGlowLetter ? '#FF007A' : '#000000', // GLOW розовый
                    ...(isGlowLetter && {
                      background: 'linear-gradient(45deg, #FF007A, #FF4D94)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    })
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </Link>
          
          {/* Десктопная навигация */}
          {!isMobile && (
            <div style={{ 
              display: 'flex',
              gap: '40px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {['Главная', 'Услуги и цены', 'Контакты'].map((item, index) => (
                <Link
                  key={index}
                  to={getPagePath(item)}
                  style={{
                    fontSize: '13px',
                    letterSpacing: '1px',
                    fontWeight: '500',
                    color: isActivePage(item) ? '#FF007A' : '#000000',
                    position: 'relative',
                    padding: '5px 0',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    if (!isActivePage(item)) {
                      e.currentTarget.style.color = '#FF007A';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActivePage(item)) {
                      e.currentTarget.style.color = '#000000';
                    }
                  }}
                >
                  {item}
                  {isActivePage(item) && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '0',
                      width: '100%',
                      height: '2px',
                      background: '#FF007A'
                    }} />
                  )}
                </Link>
              ))}
            </div>
          )}
          
          {/* Кнопка записи (десктоп) */}
          {!isMobile && (
            <Link
              to="/contact"
              style={{
                position: 'absolute',
                right: '0',
                padding: '12px 24px',
                fontSize: '12px',
                fontWeight: '500',
                letterSpacing: '1px',
                background: 'transparent',
                border: '1px solid #000000',
                color: '#000000',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#000000';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Записаться
            </Link>
          )}
          
          {/* Кнопка меню (только мобильные) */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              style={{ 
                position: 'absolute',
                right: '0',
                fontSize: '24px', 
                color: '#000000', 
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: '0'
              }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          )}
        </div>
      </nav>

      {/* Мобильное меню */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100vh',
          background: '#FFFFFF',
          zIndex: '999',
          padding: '100px 40px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '50px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {logoLetters.map((letter, index) => {
              const isSpace = letter === ' ';
              const isGlowLetter = index >= 5;
              
              return (
                <span 
                  key={index}
                  style={{ 
                    marginRight: isSpace ? '10px' : '0',
                    color: isGlowLetter ? '#FF007A' : '#000000',
                    ...(isGlowLetter && {
                      background: 'linear-gradient(45deg, #FF007A, #FF4D94)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    })
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </div>
          
          {['Главная', 'Услуги и цены', 'Контакты'].map((item, index) => ( // Удален пункт "Цены"
            <Link
              key={index}
              to={getPagePath(item)}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '700',
                color: isActivePage(item) ? '#FF007A' : '#000000',
                margin: '15px 0',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
          
          <div style={{ 
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Link
              to="/contact"
              style={{ 
                width: '100%',
                maxWidth: '300px',
                padding: '16px 30px',
                fontSize: '12px',
                fontWeight: '500',
                letterSpacing: '1px',
                background: 'transparent',
                border: '1px solid #000000',
                color: '#000000',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                textDecoration: 'none',
                textAlign: 'center'
              }}
              onClick={toggleMenu}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#000000';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Записаться онлайн
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;