import { Container } from 'react-bootstrap';
import MassageServices from '../components/Services/MassageServices';
import LaserServices from '../components/Services/LaserServices';
import CosmetologyServices from '../components/Services/CosmetologyServices';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    // Обработка якорных ссылок при загрузке страницы
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        // Небольшая задержка для гарантии рендеринга
        setTimeout(() => {
          // Используем отступ 100px от верхнего края
          const yOffset = -150; 
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      {/* Добавляем немного отступа вверху для улучшенного скролла */}
      <div style={{ height: '20px' }} id="top-spacer"></div>
      <Container className="container-huge" style={{ 
        position: 'relative',
        zIndex: '2',
        paddingTop: '20px'
      }}>
        <CosmetologyServices />
        <MassageServices />
        <LaserServices />
      </Container>
    </div>
  );
}

export default ServicesPage;