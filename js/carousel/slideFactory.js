// slideFactory.js
export default function createSlide(slideData) {
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
    
    return slide;
}
