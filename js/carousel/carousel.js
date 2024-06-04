import createSlide from './slideFactory.js';

export default document.addEventListener('DOMContentLoaded', function () {
    const slidesData = [
        { title: 'Título 1', text: 'Texto do slide 1', link: 'https://example.com/1' },
        { title: 'Título 2', text: 'Texto do slide 2', link: 'https://example.com/2' },
        { title: 'Título 3', text: 'Texto do slide 3', link: 'https://example.com/3' }
    ];

    const container = document.getElementById('carousel-slides');
    
    slidesData.forEach(slideData => {
        const slide = createSlide(slideData);
        container.appendChild(slide);
    });

    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slidesData.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slidesData.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        container.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function () {
        showSlide(currentIndex + 1);
    });

    // Mostra o slide inicial
    showSlide(currentIndex);
});
