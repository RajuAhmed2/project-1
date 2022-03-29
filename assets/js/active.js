//header
const daly = document.querySelector(".head");

window.addEventListener("scroll", function () {
  if (window.scrollY > daly.offsetHeight + 50) {
    daly.classList.add("activ");
  } else {
    daly.classList.remove("activ");
  }
});

//nav ber
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

window.onscroll = function() {myFunction()};

const scroll = document.getElementById("head");
let prevScrollpos = window.pageYOffset;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    daly.classList.add("hide");
  } else {
    daly.classList.remove("hide");
  }
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    scroll.style.top = "0";
  } else {
    scroll.style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
  
}


//seclector 
const selector = document.querySelector('.selector');
const btn = document.querySelector('.button-acroll');

btn.addEventListener('click', () => {
    selector.classList.toggle('show');
})

//animation
document.addEventListener('mousemove', parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed) /100;
        const y = (window.innerHeight - e.pageY*speed) /100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
// eye animation

jQuery(document).ready(function () {
    jQuery("#Pupil").jqEye();
    jQuery("#Pupilr").jqEye();
    jQuery("#Pupiln").jqEye();
});