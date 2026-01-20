import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

gsap.registerPlugin(ScrollTrigger);

// Компонент для обработки якорных ссылок
const ScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      
      if (element) {
        // Добавляем небольшую задержку для гарантии рендеринга
        setTimeout(() => {
          // Рассчитываем позицию с учетом высоты фиксированной шапки (если есть)
          const yOffset = -80; // Отступ сверху в пикселях
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    // Инициализация анимаций при прокрутке
    const revealElements = document.querySelectorAll('.reveal-element');
    
    revealElements.forEach(element => {
      gsap.fromTo(element,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Эффект параллакса
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach(element => {
      gsap.to(element, {
        y: () => -ScrollTrigger.maxScroll(window) * 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Очистка при размонтировании
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Router>
      <div className="interactive-bg" />
      <ScrollToTop />
      <ScrollToAnchor /> {/* Добавляем обработчик якорных ссылок */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;