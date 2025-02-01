// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img[data-src]');
  if (images.length > 0) {
    images.forEach(img => {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = () => img.removeAttribute('data-src');
    });
  }
});

// Scroll to Top Arrow
const scrollToTopButton = document.getElementById('scroll-to-top');
if (scrollToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.classList.add('visible');
    } else {
      scrollToTopButton.classList.remove('visible');
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Navbar search box toggle
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

if (navbar && searchBox) {
  searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    searchBox.classList.toggle("bx-x");
    searchBox.classList.toggle("bx-search");
  });
}

// Sidebar open/close functionality
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

if (menuOpenBtn && navLinks) {
  menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
  };
}

if (menuCloseBtn && navLinks) {
  menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
  };
}

// Sidebar submenu toggle
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
if (htmlcssArrow) {
  htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
  };
}

let moreArrow = document.querySelector(".more-arrow");
if (moreArrow) {
  moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
  };
}

let jsArrow = document.querySelector(".js-arrow");
if (jsArrow) {
  jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
  };
}

// Scroll to Top Button
const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTop.classList.add('active');
    } else {
      scrollTop.classList.remove('active');
    }
  });

  scrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
}

// Current Year for Footer
const yearElement = document.getElementById('currentYear');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    contactForm.reset();
  });
}
