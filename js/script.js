 document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slides img');
    const buttons = document.querySelectorAll('.tabs button');

    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        document.querySelector('.tabs button.active').classList.remove('active');
        btn.classList.add('active');

        slides.forEach(slide => slide.classList.remove('active'));
        slides[idx].classList.add('active');
      });
    });

    // Navigation toggle
    document.getElementById('nav-toggle').addEventListener('click', () => {
      document.getElementById('site-nav').classList.toggle('active');
    });
  });

 