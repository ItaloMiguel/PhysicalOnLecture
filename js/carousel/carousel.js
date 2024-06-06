import createSlide from "./slideFactory.js";
import setupNavigation from "./navigation.js";

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

    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    setupNavigation(prevButton, nextButton, container, slides);
});
