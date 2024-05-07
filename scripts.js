
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

const body = document.querySelector('body');
const home = document.getElementById('home');
const business = document.getElementById('business');
const webinar = document.getElementById('webinar');
const contact = document.getElementById('contactUs');


const footerHome = document.getElementById('homeFooter');
const footerBusiness = document.getElementById('businessFooter');
const footerWebinar = document.getElementById('webinarFooter');
const footerConatactUs = document.getElementById('contactUsFooter');

const mobileHome = document.getElementById('homeMobile');
const mobileBusiness = document.getElementById('businessMobile');
const mobileWebinar = document.getElementById('webinarMobile');
const mobileConatactUs = document.getElementById('contactUsMobile');


const homePage = document.querySelector('.homePageDiv');
const businessOppContent = document.querySelector('.businessOppDiv')
const webinarContent = document.querySelector('.webinarDiv');
const contactUsContent = document.querySelector('.contactUsDiv')

window.onload = function () {
    homePage.style.display = 'block';
    businessOppContent.style.display = 'none';
    webinarContent.style.display = 'none';
    contactUsContent.style.display = 'none';  
};

function showOverlay() {
  document.getElementById("overlay").style.display = "flex";
};

function showMobileOverlay() {
  document.getElementById('mobileOverlay').style.display = "flex"
}

function cancelMobileOverlay () {
  document.getElementById('mobileOverlay').style.display = "none"
}

function cancelOverlay() {
  document.getElementById("overlay").style.display = "none";
};


function displayContents() {

  if (homePage) {
    home.addEventListener('click', () => {
      homePage.style.display = 'block'
      businessOppContent.style.display = 'none';
      webinarContent.style.display = 'none';
      contactUsContent.style.display = 'none';
    })
  };

  if (businessOppContent) {
    business.addEventListener('click', () => {
      businessOppContent.style.display = 'block';
      homePage.style.display = 'none';
      webinarContent.style.display = 'none';
      contactUsContent.style.display = 'none';
    })
  };

  if (webinar) {
    webinar.addEventListener('click', () => {
      webinarContent.style.display = 'block';
      homePage.style.display = 'none';
      businessOppContent.style.display = 'none';
      contactUsContent.style.display = 'none';
    })
  };

  if (contact) {
    contact.addEventListener('click', () => {
      contactUsContent.style.display = 'block';
      homePage.style.display = 'none';
      businessOppContent.style.display = 'none';
      webinarContent.style.display = 'none';
    })
  };


};

function showContents() {

  if (homePage) {
    footerHome.addEventListener('click', () => {
      homePage.style.display = 'block'
      businessOppContent.style.display = 'none';
      webinarContent.style.display = 'none';
      contactUsContent.style.display = 'none';
    })
  };

  if (businessOppContent) {
    footerBusiness.addEventListener('click', () => {
      businessOppContent.style.display = 'block';
      homePage.style.display = 'none';
      webinarContent.style.display = 'none';
      contactUsContent.style.display = 'none';
    })
  };

  if (webinar) {
    footerWebinar.addEventListener('click', () => {
      webinarContent.style.display = 'block';
      homePage.style.display = 'none';
      businessOppContent.style.display = 'none';
      contactUsContent.style.display = 'none';
    })
  };

  if (contact) {
    footerConatactUs.addEventListener('click', () => {
      contactUsContent.style.display = 'block';
      homePage.style.display = 'none';
      businessOppContent.style.display = 'none';
      webinarContent.style.display = 'none';
    })
  };

}

function showMobile() {

  if (homePage) {
    mobileHome.addEventListener('click', () => {
      homePage.style.display = 'block'
      businessOppContent.style.display = 'none';
      webinarContent.style.display = 'none';
      contactUsContent.style.display = 'none';
    })
  };

  if (businessOppContent) {
    mobileBusiness.addEventListener('click', () => {
      businessOppContent.style.display = 'block';
      homePage.style.display = 'none';
      webinarContent.style.display = 'none';
      contactUsContent.style.display = 'none';
    })
  };

  if (webinar) {
    mobileWebinar.addEventListener('click', () => {
      webinarContent.style.display = 'block';
      homePage.style.display = 'none';
      businessOppContent.style.display = 'none';
      contactUsContent.style.display = 'none';
    })
  };

  if (contact) {
    mobileConatactUs.addEventListener('click', () => {
      contactUsContent.style.display = 'block';
      homePage.style.display = 'none';
      businessOppContent.style.display = 'none';
      webinarContent.style.display = 'none';
    })
  };

}

displayContents(); showContents(); showMobile();


