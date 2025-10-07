AOS.init();

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.scroll-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      // Check if it's an internal link
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let current = '';
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.scroll-link');
  const navHeight = document.querySelector('.navbar').offsetHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});
