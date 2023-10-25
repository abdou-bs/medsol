let navbar = document.querySelector('.header .navbar');


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active')
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active')
}





let searchform = document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.add('active')
}

document.querySelector('#close-search').onclick = () =>{
    searchform.classList.remove('active')
}


window.onscroll =() =>{
    navbar.classList.remove('active')

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload=() =>{
   

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
      breakpoints: {
        0: {
          slidesPerView: 1,
         
        },
        640: {
          slidesPerView: 2,
          
        },
        768: {
          slidesPerView: 3,
          
        },
       
  }});



  var swiper = new Swiper(".clients-slider", {
    spaceBetween: 50,
    loop:true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
         
        },
        640: {
          slidesPerView: 2,
          
        },
        768: {
          slidesPerView: 3,
          
        },
  }});


