import { slidesData } from './data.js';
import { createSlide } from './slideFactory.js';
import { setupNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', function () {
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
