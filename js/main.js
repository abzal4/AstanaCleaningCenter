document.addEventListener('DOMContentLoaded', function() {
  
  // РАБОТА С ТАБАМИ
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Убираем активный класс у всех табов
      tabs.forEach(t => t.classList.remove('active'));
      // Добавляем текущему табу
      this.classList.add('active');
      
      // Скрываем весь контент
      contents.forEach(content => {
        content.classList.remove('active');
      });
      
      // Показываем нужный контент
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
  
  // РАБОТА С АККОРДЕОНОМ
  const headers = document.querySelectorAll('.price-header');
  
  headers.forEach(header => {
    header.addEventListener('click', function(e) {
      // Предотвращаем всплытие события
      e.stopPropagation();
      
      const body = this.nextElementSibling;
      
      // Проверяем, что это действительно price-body
      if (!body || !body.classList.contains('price-body')) return;
      
      // Переключаем активный класс у заголовка
      this.classList.toggle('active');
      
      // Переключаем активный класс у тела
      body.classList.toggle('active');
    });
  });
  
});

document.querySelectorAll(".calc-card").forEach(card => {

card.addEventListener("click", function(){

// выбор карточки
document.querySelectorAll(".calc-card").forEach(c=>{
c.classList.remove("active");
});
this.classList.add("active");

// получаем категорию
let tab = this.dataset.tab;

// переключаем вкладки
document.querySelectorAll(".tab").forEach(t=>{
t.classList.remove("active");
});

document.querySelectorAll(".tab-content").forEach(content=>{
content.classList.remove("active");
});

// активная вкладка
document.querySelector('.tab[data-tab="'+tab+'"]').classList.add("active");

// активный блок цен
document.getElementById(tab).classList.add("active");

// прокрутка к ценам
document.querySelector(".prices-section").scrollIntoView({
behavior:"smooth"
});

});

});

document.querySelectorAll(".calc-card").forEach(card => {
  card.addEventListener("click", () => {

    // убрать активность у всех
    document.querySelectorAll(".calc-card").forEach(c => {
      c.classList.remove("active");
    });

    // добавить только выбранной
    card.classList.add("active");

  });
});