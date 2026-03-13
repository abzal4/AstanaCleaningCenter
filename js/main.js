// 1. Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const navLeft = document.querySelector('.nav-left');

if (menuToggle && navLeft) {
  menuToggle.addEventListener('click', () => {
    navLeft.classList.toggle('active'); 
    menuToggle.classList.toggle('open'); 
  });

  navLeft.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLeft.classList.remove('active'); 
      menuToggle.classList.remove('open');
    });
  });
}

// 2. Табы и аккордеон в секции Цен
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  
  // Переключение табов
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      contents.forEach(content => {
        content.classList.remove('active');
      });
      
      const targetId = this.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      
      if (targetContent) {
        targetContent.classList.add('active');
      }
      
      // Закрываем все открытые аккордеоны при смене таба
      document.querySelectorAll('.price-header').forEach(header => {
        header.classList.remove('active');
      });
      document.querySelectorAll('.price-body').forEach(body => {
        body.classList.remove('active');
      });
    });
  });
  
  // Аккордеон внутри табов
  const headers = document.querySelectorAll('.price-header');
  headers.forEach(header => {
    header.addEventListener('click', function(e) {
      e.stopPropagation();
      const body = this.nextElementSibling;
      
      if (!body || !body.classList.contains('price-body')) return;
      
      // Переключаем текущий
      this.classList.toggle('active');
      body.classList.toggle('active');
    });
  });
});
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function showSlide(nextIndex) {
  slides[currentSlide].classList.remove('active');
  slides[nextIndex].classList.add('active');

  currentSlide = nextIndex;
  updateDots(currentSlide);
}

// Кнопки
document.querySelector('.next').addEventListener('click', () => {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  const nextIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(nextIndex);
});

// Клики по точкам
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.dataset.slide);
    showSlide(index);
  });
});

// Автопереключение
setInterval(() => {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}, 8000);