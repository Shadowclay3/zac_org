$('.your-class').slick({ // Активируется библиотека Slick Slider
  slidesToShow: 3, // Количество слайдов для показа
  slidesToScroll: 1, // Количество слайдов которое будет пролистываться
  autoplay: true, // Автопроигрывание включено
  autoplaySpeed: 2000,// Скорость проигрывания в милисекундах
  responsive: [//Адаптивность
      {
        breakpoint: 1440,// Максимальнальная ширина при адаптивности
        settings: {//Настройки, что будет при адаптивности
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Отключить стрелочки по бокам на планшетах и телефонах 
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
      
$('.first').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true
});
	

$('.home__events-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots:true,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
          

$('.department__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots:true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

const info = document.querySelectorAll(".teachers__info");
const teachers = document.querySelectorAll(".commisions__teacher");
const closeTeachers = document.querySelectorAll(".teachers__close");
teachers.forEach((item,i)=>{
  item.addEventListener('click',()=>{
    info[i].classList.add('show');
  })
})

console.log(closeTeachers)

closeTeachers.forEach((item,i)=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    info[i].classList.remove("show");
    
  })
})
        