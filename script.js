// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

// scroll section link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top  = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active')
            })
        }
    })
}

const typingText = Typify('#typify-text', {
    text: ['Web Developer', 'Mobile Developer'],
    delay: 100,
    loop: true,
    cursor: true,
    stringDelay: 1000 
  });