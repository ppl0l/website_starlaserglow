import { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const selectedService = localStorage.getItem('selectedService');
    
    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        service: selectedService
      }));
      
      localStorage.removeItem('selectedService');
    }
  }, []);

  const validatePhone = (phone) => {
    const cleanedPhone = phone.replace(/\D/g, '');
    return /^[78]\d{10}$/.test(cleanedPhone);
  };

  const validateName = (name) => {
    return /^[a-zA-Zа-яА-ЯёЁ\s\-']{2,}$/.test(name.trim());
  };

  const validateDate = (date) => {
    if (!date) return false;
    const selectedDate = new Date(date);
    const now = new Date();
    return selectedDate > now;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    } else if (!validateName(formData.name)) {
      newErrors.name = 'Введите корректное имя (только буквы, минимум 2 символа)';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен для заполнения';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона (например: +7 999 123-45-67)';
    }

    if (!formData.service.trim()) {
      newErrors.service = 'Укажите услугу';
    }

    if (!formData.date) {
      newErrors.date = 'Укажите желаемую дату';
    } else if (!validateDate(formData.date)) {
      newErrors.date = 'Дата должна быть в будущем';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const sendBookingRequest = async (formData) => {
  try {
    // Замените на ваш реальный URL с Render
    const API_URL = 'https://beauty-server.onrender.com/api/booking';
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Ошибка отправки:', error);
    return false;
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const formatPhoneInput = (value) => {
    const numbers = value.replace(/\D/g, '');
    
    let formatted = numbers;
    if (formatted.startsWith('8') && formatted.length <= 11) {
      formatted = '7' + formatted.substring(1);
    }
    
    if (formatted.length > 0) {
      formatted = '+7' + formatted.substring(1);
    }
    if (formatted.length > 2) {
      formatted = formatted.substring(0, 2) + ' ' + formatted.substring(2);
    }
    if (formatted.length > 6) {
      formatted = formatted.substring(0, 6) + ' ' + formatted.substring(6);
    }
    if (formatted.length > 10) {
      formatted = formatted.substring(0, 10) + '-' + formatted.substring(10);
    }
    if (formatted.length > 13) {
      formatted = formatted.substring(0, 13) + '-' + formatted.substring(13);
    }
    
    return formatted;
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneInput(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formattedPhone
    }));
    
    if (errors.phone) {
      setErrors(prev => ({
        ...prev,
        phone: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      try {
        // Отправляем данные на наш сервер
        const sent = await sendBookingRequest(formData);
        
        if (sent) {
          console.log('Form submitted successfully:', formData);
          setSubmitted(true);
          
          // Сбрасываем форму
          setFormData({
            name: '',
            phone: '',
            email: '',
            service: '',
            date: '',
            message: ''
          });
          setErrors({});
          
          // Автоматически скрываем сообщение об успехе через 5 секунд
          setTimeout(() => {
            setSubmitted(false);
            setIsLoading(false);
          }, 5000);
        } else {
          // Если отправка не удалась
          alert('Ошибка отправки заявки. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке формы');
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {submitted && (
        <Alert variant="success" className="mb-4" style={{ 
          backgroundColor: 'rgba(255, 0, 122, 0.1)',
          borderColor: '#FF007A',
          color: '#FF007A'
        }}>
          Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </Alert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Label style={{ color: '#333' }}>Ваше имя *</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Иван Иванов"
            isInvalid={!!errors.name}
            style={{ 
              borderColor: errors.name ? '#FF007A' : '#ddd',
              borderWidth: '1px'
            }}
          />
          {errors.name && (
            <div className="invalid-feedback d-block" style={{ color: '#FF007A' }}>
              {errors.name}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: '#333' }}>Номер телефона *</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            required
            placeholder="+7 999 123-45-67"
            isInvalid={!!errors.phone}
            style={{ 
              borderColor: errors.phone ? '#FF007A' : '#ddd',
              borderWidth: '1px'
            }}
          />
          {errors.phone && (
            <div className="invalid-feedback d-block" style={{ color: '#FF007A' }}>
              {errors.phone}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: '#333' }}>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.ru"
            isInvalid={!!errors.email}
            style={{ 
              borderColor: errors.email ? '#FF007A' : '#ddd',
              borderWidth: '1px'
            }}
          />
          {errors.email && (
            <div className="invalid-feedback d-block" style={{ color: '#FF007A' }}>
              {errors.email}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: '#333' }}>Услуга *</Form.Label>
          <Form.Control
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            placeholder="Например: Чистка лица ультразвуковая"
            isInvalid={!!errors.service}
            style={{ 
              borderColor: errors.service ? '#FF007A' : '#ddd',
              borderWidth: '1px'
            }}
          />
          {errors.service && (
            <div className="invalid-feedback d-block" style={{ color: '#FF007A' }}>
              {errors.service}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: '#333' }}>Желаемая дата и время *</Form.Label>
          <Form.Control
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            isInvalid={!!errors.date}
            style={{ 
              borderColor: errors.date ? '#FF007A' : '#ddd',
              borderWidth: '1px'
            }}
          />
          {errors.date && (
            <div className="invalid-feedback d-block" style={{ color: '#FF007A' }}>
              {errors.date}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label style={{ color: '#333' }}>Дополнительная информация</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ваши пожелания, вопросы или особенности..."
            style={{ 
              borderColor: '#ddd',
              borderWidth: '1px'
            }}
          />
        </Form.Group>

        <div className="d-grid">
          <Button 
            type="submit" 
            size="lg"
            disabled={isLoading}
            style={{ 
              backgroundColor: '#FF007A',
              borderColor: '#FF007A',
              color: '#fff',
              fontWeight: '600',
              padding: '12px 24px',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              opacity: isLoading ? 0.7 : 1
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.target.style.backgroundColor = '#e6006e';
                e.target.style.borderColor = '#e6006e';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.target.style.backgroundColor = '#FF007A';
                e.target.style.borderColor = '#FF007A';
              }
            }}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Отправка...
              </>
            ) : (
              'Отправить заявку на запись'
            )}
          </Button>
        </div>
        
        <div className="text-center mt-3">
          <small style={{ color: '#666' }}>
            * - обязательные для заполнения поля<br />
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </small>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;