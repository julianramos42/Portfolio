let mostrarMas = document.getElementById('mostrarMas');
let hideImg = document.getElementById('hideImg');

mostrarMas.addEventListener('click', mostrarImagenes);

function mostrarImagenes() {
  hideImg.classList.toggle('show');
  if(location.pathname == "/index.html") {
    if(hideImg.classList.contains('show')) {
      mostrarMas.innerHTML = 'Ver Menos';
    } else {
      mostrarMas.innerHTML = 'Ver Más';
    }
  }else if(location.pathname == "/en/index.html"){
    if(hideImg.classList.contains('show')) {
      mostrarMas.innerHTML = 'Show Less';
    } else {
      mostrarMas.innerHTML = 'Show More';
    }
  }
}

const imageWrapper = document.querySelector('.image-wrapper')
const imageItems = document.querySelectorAll('.image-wrapper > *')
const imageLength = imageItems.length
const perView = 3
let totalScroll = 0
const delay = 2000

imageWrapper.style.setProperty('--per-view', perView)
for (let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
}

let autoScroll = setInterval(scrolling, delay)

function scrolling() {
  totalScroll++
  if (totalScroll == imageLength + 1) {
    clearInterval(autoScroll)
    totalScroll = 1
    imageWrapper.style.transition = '0s'
    imageWrapper.style.left = '0'
    autoScroll = setInterval(scrolling, delay)
  }
  const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24
  imageWrapper.style.left = `-${totalScroll * widthEl}px`
  imageWrapper.style.transition = '.3s'
}

const { createApp } = Vue;
createApp({
  data() {
    return {
      iconos: [{
        img: '../Imagenes/whatsapp.png',
        link: "https://wa.me/5491150234561?text=Hola%20Julián,%20nos%20interesaría%20que%20trabajes%20con%20nosotros."
      },
      {
        img: '../Imagenes/linkedin.png',
        link: 'https://www.linkedin.com/in/julian-ramos42/'
      },
      {
        img: '../Imagenes/github.png',
        link: 'https://github.com/julianramos42'
      }]
    }
  }
}).mount('.icons');


var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
  let id = check.checked;
  if (id == true) {
    location.href = "./en/index.html";
  } else {
    location.href = "../index.html";
  }
}