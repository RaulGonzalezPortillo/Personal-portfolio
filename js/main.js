const header = document.querySelector('header');
const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const contactForm = document.querySelector('#contactForm');
const mailTo = document.querySelector('#mailTo');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
});

const toggleMenu = () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(contactForm);
    mailTo.setAttribute("href", `mailTo: raulgonzalezportillo@gmail.com?subject=Hello, I am ${form.get("name")}. I want to get in contact with you&body=email: ${form.get("email")}%0D%0Amessage: ${form.get("message")}`);
    mailTo.click();
});