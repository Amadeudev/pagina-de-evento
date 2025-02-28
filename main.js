let slideAtual = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.programacaoItemSlide');
    const totalSlides = slides.length;

    slideAtual = (slideAtual + direction + totalSlides) % totalSlides;

    const carrosselItens = document.querySelector('.carrosselItens');
    carrosselItens.style.transform = `translateX(-${slideAtual * 100}%)`;
}