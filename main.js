const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* fechar o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//*mudar o header da pagina quando der scroll7
const header = document.querySelector('#header')
const navHeight = header.offsetHeigt

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
    console.log('maior igual')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})
/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  sliderPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
})
/* ScrollReveal: Mostrar quando der scroll na pagina */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '25px',
  duration: 550,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home text,
               #about .image, #about .text,
               #services header, #services .text, #services .image,
               #testimonials header, #testimonials .testimonials,
               #contact .text, #contact .links`,
  { interval: 150 }
)
