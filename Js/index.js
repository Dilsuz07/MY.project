let navbar = document.querySelector('.navbar-nav');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {

    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}