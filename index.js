const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

const changeSlide = (dir) => {
    if (dir === 'up') {
        activeSlideIndex++;
        activeSlideIndex = activeSlideIndex === slidesCount ? 0 : activeSlideIndex;
    } else  if (dir === 'down') {
        activeSlideIndex--;
        activeSlideIndex = activeSlideIndex < 0 ? (slidesCount - 1) : activeSlideIndex;
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}