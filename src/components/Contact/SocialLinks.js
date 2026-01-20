import { FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function SocialLinks({ size = "md" }) {
  const iconSize = size === "lg" ? 28 : 20;
  
  return (
    <div className="d-flex justify-content-center">
      <a 
        href="https://t.me/star_laser_glow" 
        target="_blank" 
        rel="noreferrer" 
        className="social-icon mx-2"
        title="Telegram"
        style={{ color: '#FF007A' }}
      >
        <FaTelegram size={iconSize} />
      </a>
      
      <a 
        href="https://www.instagram.com/star_laser_glow" 
        target="_blank" 
        rel="noreferrer" 
        className="social-icon mx-2"
        title="Instagram"
        style={{ color: '#FF007A' }}
      >
        <FaInstagram size={iconSize} />
      </a>
      
      <a 
        href="https://wa.me/79995070555" 
        target="_blank" 
        rel="noreferrer" 
        className="social-icon mx-2"
        title="WhatsApp"
        style={{ color: '#FF007A' }}
      >
        <FaWhatsapp size={iconSize} />
      </a>
    </div>
  );
}

export default SocialLinks;