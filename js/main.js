const menuToggle = document.querySelector('.menu-toggle');
const navLeft = document.querySelector('.nav-left');

menuToggle.addEventListener('click', () => {
  navLeft.classList.toggle('active'); // меню открывается/закрывается
  menuToggle.classList.toggle('open'); // анимация гамбургера
});

navLeft.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLeft.classList.remove('active'); // закрытие при клике на ссылку
    menuToggle.classList.remove('open');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const calcCards = document.querySelectorAll(".calc-card");
  const hiddenInput = document.getElementById("selected-category");
  let selectedCategory = "";

  calcCards.forEach(card => {
    card.addEventListener("click", () => {
      calcCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      selectedCategory = card.dataset.category;
    });
  });

  const form = document.getElementById("calcForm");
  form.addEventListener("submit", (e) => {
    if (!selectedCategory) {
      e.preventDefault();
      alert("Выберите категорию услуги!");
      return false;
    }
    hiddenInput.value = selectedCategory; 
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  
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
      
      document.querySelectorAll('.price-header').forEach(header => {
        header.classList.remove('active');
      });
      
      document.querySelectorAll('.price-body').forEach(body => {
        body.classList.remove('active');
      });
    });
  });
  
  const headers = document.querySelectorAll('.price-header');

  headers.forEach(header => {
    header.addEventListener('click', function(e) {
      e.stopPropagation();
      const body = this.nextElementSibling;
      
      if (!body || !body.classList.contains('price-body')) return;
      
      this.classList.toggle('active');
      body.classList.toggle('active');
    });
  });
});

document.querySelectorAll(".calc-card").forEach(card => {
  card.addEventListener("click", function() {
    document.querySelectorAll(".calc-card").forEach(c => {
      c.classList.remove("active");
    });
    
    this.classList.add("active");
    
    let tab = this.dataset.tab;

    document.querySelectorAll(".tab").forEach(t => {
      t.classList.remove("active");
    });

    document.querySelectorAll(".tab-content").forEach(content => {
      content.classList.remove("active");
    });

    document.querySelector('.tab[data-tab="' + tab + '"]').classList.add("active");
    document.getElementById(tab).classList.add("active");

    document.querySelector(".prices-section").scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll(".calc-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".calc-card").forEach(c => {
      c.classList.remove("active");
    });

    card.classList.add("active");
  });
});