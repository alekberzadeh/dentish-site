// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.header .nav');

// menu.onclick = () => {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');

// }


// const navToggler = document.querySelector(".navbar-toggler");

//     navToggler.addEventListener("click",toggleNav);
//     function toggleNav(){
//         navToggler.classList.toggle("active");
//     };

let navToggler1 = document.querySelector('.navbar-toggler');
let navToggler2 = document.querySelector('.header .nav');
let header = document.querySelector('.header');

navToggler1.addEventListener("click", toggleNav);

function toggleNav() {
    navToggler1.classList.toggle("active");
    navToggler2.classList.toggle("active");
};

window.onscroll = () =>{
    navToggler1.classList.remove("active");
    navToggler2.classList.remove("active");

    if (window.scrollY > 0) {
        header.classList.add('active');
    }else{
        header.classList.remove('active')
    }
}
