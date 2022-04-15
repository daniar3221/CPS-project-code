import '../scss/style.scss';

const menuSwiper = new Swiper('.about__menu-slider  ', {
  pagination:{
    // el: '.brand__swiper-pagination',
    type: '.bullets',
  }

  
});

const brandSwiper = new Swiper('.brand__swiper-container',{

  slidesPerView: 1,
  spaceBetween: 16,

  pagination: {
    el: '.brand__swiper-pagination',
  },

});

const electronic = new Swiper('.electronic__swiper-container',{
  slidesPerView: 1,
  spaceBetween: 16,

  pagination: {
    el: '.electronic__swiper-pagination',
  },

});

const price = new Swiper('.price__swiper-container',{
  slidesPerView: 1,
  spaceBetween: 16,

  pagination: {
    el: '.price__swiper-pagination',
  },

});





console.log('Works!');

