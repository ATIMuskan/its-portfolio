import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Muskan. All Rights Reserved.</p>
        
       
        <div className="social-icons">
          <a href="https://github.com/ATIMuskan" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/muskan-shrivas-757091233/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="https://www.instagram.com/epicure.amare/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
