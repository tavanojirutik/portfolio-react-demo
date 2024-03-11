import React, { useEffect } from 'react';
import './scrollup.css';

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      //When the Scroll is Higher then 560 viewport height , add the Show  show-scroll class  
      //to a tag with the scroll-tab class
      if (window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <div className="scrollup" onClick={scrollToTop}>
      <i className='uil uil-arrow-up scrollup__icon'></i>
    </div>
  );
};

export default ScrollUp;
