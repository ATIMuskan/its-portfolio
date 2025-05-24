import React, { useState, useEffect } from 'react';
import './BackToTop.css';

function BackToTop() {
  const [show, setShow] = useState(false);

  const checkScrollTop = () => {
    if (!show && window.pageYOffset > 300) {
      setShow(true);
    } else if (show && window.pageYOffset <= 300) {
      setShow(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [show]);

  return (
    <button className={show ? "back-to-top show" : "back-to-top"} onClick={scrollTop}>↑</button>
  );
}

export default BackToTop;
