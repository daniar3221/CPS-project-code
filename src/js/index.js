import '../scss/style.scss';

// sliders
const menuSwiper = document.querySelector('.about__swiper-container')
const brandSwiper = document.querySelector('.brand__swiper-container')
const electronicSwiper = document.querySelector('.electronic__swiper-container')
const priceSwiper = document.querySelector('.price__swiper-container')

const aboutTextButton = document.getElementById("about_text_button")
let heightTextBlock = document.querySelector('.about__text__visible').clientHeight
const aboutSpanButton = document.getElementById('about_span_button')
const aboutText = document.querySelector('.about__text')

const brandBlock = document.querySelector('.brand__block')
const brandItemsButton = document.getElementById('brant_text_button')
const brandSpanButton = document.getElementById("brand__span__button")

const electronicBlock = document.querySelector('.electronic__block')
const electronicItemsButton = document.querySelector('.electronic__show-btn')
const electronicSpanButton = document.querySelector('.electronic__span__button')

aboutText.style.height = heightTextBlock + 14 + "px"
brandBlock.style.height = "50px"
electronicBlock.style.height = "190px"

function openTextBlock(){
  if (aboutText.style.height === (heightTextBlock + 14 + "px")){
    aboutText.style.height = 'auto';
    aboutSpanButton.textContent = "Свернуть"
  } else{
    aboutText.style.height = heightTextBlock + 14 + "px"
    aboutSpanButton.textContent = "Читать далее"
  }
}

function openBrandBlock(){
  if (brandBlock.style.height == "50px"){
    brandBlock.style.height = "auto"
    brandSpanButton.textContent = "Свернуть"
  } else{
    brandBlock.style.height = "50px"
    brandSpanButton.textContent = "Показать все"
  }
}

function openElectronicBlock(){
  
  if (electronicBlock.style.height == "190px"){
    electronicBlock.style.height = "400px"
    electronicSpanButton.textContent = "Свернуть"
  } else{
    electronicBlock.style.height = "190px"
    electronicSpanButton.textContent = "Показать все"
  }

  
}


window.addEventListener("resize", function(e){
  heightTextBlock = document.querySelector('.about__text__visible').clientHeight
  aboutText.style.height = heightTextBlock + 14 + "px"

})

aboutTextButton.addEventListener("click", openTextBlock)
brandItemsButton.addEventListener("click", openBrandBlock)
electronicItemsButton.addEventListener("click", openElectronicBlock)



let myMenuSwiper;
let myBrandSwiper;
let myElectronicSwiper;
let myPriceSwiper;


const slidersInit320 = () => {

  myMenuSwiper = new Swiper(menuSwiper, {

    spaceBetween: 16,
    

  });

  myBrandSwiper = new Swiper(brandSwiper, {

    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: '.brand__swiper-pagination',
    },

  });

  myElectronicSwiper = new Swiper(electronicSwiper, {
    slidesPerView: 1,
    spaceBetween: 16,

    pagination: {
      el: '.electronic__swiper-pagination',
    },

  });

  myPriceSwiper = new Swiper(priceSwiper, {
    slidesPerView: 1,
    spaceBetween: 16,

    pagination: {
      el: '.price__swiper-pagination',
    },

  });

}

slidersInit320()



const leftBlockChatBtn = document.querySelector('.left-block__button__chat')
const rightPopup = document.querySelector('.popup-right')
const closePopupBtn = document.querySelector('.popup-right__close')
const rightPopupContent = document.querySelector('.popup-right__content')
const navChatBtn = document.querySelector('.nav__chat')
const leftPopupChatBtn = document.querySelector('.popup-left__button__chat')

leftPopupChatBtn.onclick = function(){
  rightPopup.style.visibility = 'visible'
  rightPopup.style.opacity = '1'
  rightPopupContent.style.transform = "translate(0px,0px)"
  rightPopupContent.style.opacity = "1"
  closePopupBtn.style.position = 'unset'
}

leftBlockChatBtn.onclick = function openRightPopup(){
  rightPopup.style.visibility = 'visible'
  rightPopup.style.opacity = '1'
  rightPopupContent.style.transform = "translate(0px,0px)"
  rightPopupContent.style.opacity = "1"
}

navChatBtn.onclick = function openRightPopup(){
  rightPopup.style.visibility = 'visible'
  rightPopup.style.opacity = '1'
  rightPopupContent.style.transform = "translate(0px,0px)"
  rightPopupContent.style.opacity = "1"
}
closePopupBtn.onclick = function closeRightPopup(){
  rightPopup.style.visibility = 'hidden'
  rightPopup.style.opacity = '0'
  rightPopupContent.style.transform = "translate(120%,0px)"
  rightPopupContent.style.opacity = "0"
}

const openMenuBtn = document.querySelector('.nav__menu')
const leftPopup = document.querySelector('.popup-left')
const closeLeftPopupBtn = document.querySelector('.popup-left__close')
const leftPopupContent = document.querySelector('.popup-left__content')

openMenuBtn.onclick = function (){
  leftPopup.style.visibility = 'visible'
  leftPopup.style.opacity = "1"
  leftPopupContent.style.transform = "translate(0px,0px)"
  leftPopupContent.style.opacity = "1"
}
closeLeftPopupBtn.onclick = function(){
  leftPopup.style.visibility = 'hidden'
  leftPopup.style.opacity = "0"
  leftPopupContent.style.transform = "translate(-100%,0px)"
  leftPopupContent.style.opacity = "0"
}

const leftPopupPhoneBtn = document.querySelector('.popup-left__button__phone')
const rightPopupCall = document.querySelector('.popup-right-call')
const closeRightPopupCall = document.querySelector('.popup-right-call__close')
const rightPopupCallContent = document.querySelector('.popup-right-call__content')
const navCallBtn = document.querySelector('.nav__phone')
const leftBlockCallBtn = document.querySelector('.left-block__button__phone')


leftBlockCallBtn.onclick = function(){
  rightPopupCall.style.visibility = 'visible'
  rightPopupCall.style.opacity = '1'
  rightPopupCallContent.style.transform = "translate(0px,0px)"
  rightPopupCallContent.style.opacity = "1"
}

navCallBtn.onclick = function(){
  rightPopupCall.style.visibility = 'visible'
  rightPopupCall.style.opacity = '1'
  rightPopupCallContent.style.transform = "translate(0px,0px)"
  rightPopupCallContent.style.opacity = "1"
  
}

leftPopupPhoneBtn.onclick = function(){
  rightPopupCall.style.visibility = 'visible'
  rightPopupCall.style.opacity = '1'
  rightPopupCallContent.style.transform = "translate(0px,0px)"
  rightPopupCallContent.style.opacity = "1"
  closeRightPopupCall.style.position = 'unset'
}

closeRightPopupCall.onclick = function(){
  rightPopupCall.style.visibility = 'hidden'
  rightPopupCall.style.opacity = '0'
  rightPopupCallContent.style.transform = "translate(120%,0px)"
  rightPopupCallContent.style.opacity = "0"
}

console.log('Works!');