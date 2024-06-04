// carousel.js
export default document.addEventListener('DOMContentLoaded', function () {
    const slidesData = [
        { title: 'Título 1', text: 'Texto do slide 1', link: 'https://example.com/1' },
        { title: 'Título 2', text: 'Texto do slide 2', link: 'https://example.com/2' },
        { title: 'Título 3', text: 'Texto do slide 3', link: 'https://example.com/3' }
    ];

    const container = document.getElementById('carousel-container');
    
    const slidesContainer = document.createElement('div');
    slidesContainer.id = 'carousel-slides';

    slidesData.forEach(slideData => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-slide');
        
        const title = document.createElement('h2');
        title.textContent = slideData.title;

        const text = document.createElement('p');
        text.textContent = slideData.text;
        
        const link = document.createElement('a');
        link.href = slideData.link;
        link.textContent = 'Leia mais';

        slide.appendChild(title);
        slide.appendChild(text);
        slide.appendChild(link);
        slidesContainer.appendChild(slide);
    });

    const prevButton = document.createElement('button');
    prevButton.id = 'prevBtn';
    prevButton.innerHTML = '&#10094;';
    
    const nextButton = document.createElement('button');
    nextButton.id = 'nextBtn';
    nextButton.innerHTML = '&#10095;';

    container.appendChild(slidesContainer);
    container.appendChild(prevButton);
    container.appendChild(nextButton);

    let currentIndex = 0;

    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.overflow = 'hidden';

    slidesContainer.style.display = 'flex';
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';

    const slides = slidesContainer.querySelectorAll('.carousel-slide');
    slides.forEach(slide => {
        slide.style.minWidth = '100%';
        slide.style.boxSizing = 'border-box';
        slide.style.padding = '20px';
    });

    prevButton.style.position = 'absolute';
    prevButton.style.top = '50%';
    prevButton.style.left = '0';
    prevButton.style.transform = 'translateY(-50%)';
    prevButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    prevButton.style.border = 'none';
    prevButton.style.color = 'white';
    prevButton.style.padding = '10px';
    prevButton.style.cursor = 'pointer';

    nextButton.style.position = 'absolute';
    nextButton.style.top = '50%';
    nextButton.style.right = '0';
    nextButton.style.transform = 'translateY(-50%)';
    nextButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    nextButton.style.border = 'none';
    nextButton.style.color = 'white';
    nextButton.style.padding = '10px';
    nextButton.style.cursor = 'pointer';

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function () {
        showSlide(currentIndex + 1);
    });


    showSlide(currentIndex);
});