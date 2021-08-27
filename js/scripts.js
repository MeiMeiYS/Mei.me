/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// masthead-avatar gif animation on hover

let PixelMe = document.getElementById("PixelMe");
PixelMe.addEventListener('mouseover', function() {
    this.src = 'assets/img/Pixel_Mei_Motion.gif'
})
PixelMe.addEventListener('mouseout', function() {
    this.src = 'assets/img/Pixel_Mei.png'
})



// Contact form validation
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
  
  const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
};

let isFormValid = false;
let isValidationOn = false;

const form = document.querySelector('#contactForm');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const messageInput = document.querySelector('textarea[name="message"]');
const thankYou = document.querySelector('.thank-you');

const resetElement = (element) => {
    element.classList.remove('invalid');
    element.nextElementSibling.classList.add("hidden");
}

const validateElement = (element) => {
    element.classList.add("invalid");
    element.nextElementSibling.classList.remove("hidden");
}

const validateInputs = () => {
    if (!isValidationOn) return;
    isFormValid = true
    resetElement(nameInput);
    resetElement(emailInput);
    resetElement(phoneInput);
    resetElement(messageInput);
    if (!nameInput.value) {
        validateElement(nameInput);
        isFormValid = false;
    }
    if (!isValidEmail(emailInput.value)) {
        validateElement(emailInput);
        isFormValid = false;
    }
    if (!isValidPhone(phoneInput.value)) {
        validateElement(phoneInput);
        isFormValid = false;
    }
    if (!messageInput.value) {
        validateElement(messageInput);
        isFormValid = false;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if (isFormValid) {
        form.remove();
        thankYou.classList.remove("hidden")
    }

});

nameInput.addEventListener('input', () => {
    validateInputs();
})
emailInput.addEventListener('input', () => {
    validateInputs();
})
phoneInput.addEventListener('input', () => {
    validateInputs();
})
messageInput.addEventListener('input', () => {
    validateInputs();
})
