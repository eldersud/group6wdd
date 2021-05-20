var currentYear = new Date().getFullYear();

document.getElementById("currentYear").innerHTML = currentYear.toString();

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.ul-nav')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};