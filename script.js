const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      card.style.transform = "translateY(0)";
      card.style.opacity = "1";
    }
  });
});

const elements = document.querySelectorAll('.fade-in');

function showOnScroll() {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;

        if (pos < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);

window.addEventListener('load', () => {
    showOnScroll();
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('#burger-menu');
    const nav = document.querySelector('.nav');

    if (burger && nav) {
        burger.addEventListener('click', (e) => {
            e.stopPropagation(); // Не даем клику уйти на документ
            burger.classList.toggle('open'); // Для анимации полосок
            nav.classList.toggle('active'); // Для показа меню в CSS
        });

        // Закрываем при клике на любую ссылку
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                burger.classList.remove('open');
            });
        });

        // Закрываем при клике мимо
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('active') && !nav.contains(e.target)) {
                nav.classList.remove('active');
                burger.classList.remove('open');
            }
        });
    }
});