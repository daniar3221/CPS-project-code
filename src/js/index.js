import '../scss/style.scss';

const menuSwiper = new Swiper('.about__menu-slider  ', {
  pagination:{
    // el: '.brand__swiper-pagination',
    type: '.bullets',
  }

  
});

const brandSwiper = new Swiper(".brand__swiper-container",{

  
  spaceBetween: 16,
  pagination:{
    el: '.brand__swiper-pagination',
    // type: '.bullets',
  }

});






console.log('Works!');

