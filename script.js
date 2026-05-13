/* =========================================
   HEADER — scroll behavior
   ========================================= */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* =========================================
   HAMBURGER — menu mobile
   ========================================= */
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
    });
});

/* =========================================
   CARROSSEL — destinos
   ========================================= */
const track = document.getElementById('carrosselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carrosselDots');
const cards = document.querySelectorAll('.destino-card');

let current = 0;
const total = cards.length;

// Gera os dots dinamicamente
cards.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Ir para destino ${index + 1}`);
    dot.addEventListener('click', () => goTo(index));
    dotsContainer.appendChild(dot);
});

function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;

    // Atualiza dot ativo
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
    });
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

/* =========================================
   CARROSSEL — swipe mobile
   ========================================= */
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;

    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            goTo(current + 1); // arrastou para esquerda → próximo
        } else {
            goTo(current - 1); // arrastou para direita → anterior
        }
    }
});