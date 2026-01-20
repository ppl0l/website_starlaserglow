import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BookingButton({ variant = "minimal", size = "md", className = "", style = {} }) {
  const baseStyles = {
    background: '#FF007A',
    border: 'none',
    padding: '12px 24px',
    fontWeight: '600',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    color: 'white',
    textDecoration: 'none'
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.background = '#e6006e';
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 0, 122, 0.3)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.background = '#FF007A';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  if (variant === 'minimal') {
    return (
      <Button
        as={Link}
        to="/contact"
        className={`btn-minimal ${variant === 'black' ? 'btn-minimal-black' : ''} ${className}`}
        size={size}
        style={{ ...baseStyles, ...style }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Запись на консультацию
      </Button>
    );
  }

  // Стандартная кнопка с розовыми стилями
  return (
    <Button
      as={Link}
      to="/contact"
      className={`booking-btn ${className}`}
      size={size}
      style={{ ...baseStyles, ...style }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      Запись на консультацию
    </Button>
  );
}

export default BookingButton;