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
