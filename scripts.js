
const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 4000,
        disableOninteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.fa-circle-chevron-left',
      prevEl: '.fa-circle-chevron-right',
    },
  
    
  });