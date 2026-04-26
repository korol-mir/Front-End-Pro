"use strict";
const prevImgBtn = document.querySelector('#prev-img');
const nextImgBtn = document.querySelector('#next-img');
const img = document.querySelector('img');
const dotsContainer = document.querySelector('#dotsContainer');

const images = [
    './JPG/Jpg1.jpg',
    './JPG/Jpg2.jpg',
    './JPG/Jpg3.jpg',
    './JPG/Jpg4.jpg'
];

let currentImgIndex = 0;

images.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        currentImgIndex = index;
        updateImage();
    });
    dotsContainer.appendChild(dot);
});

function updateImage() {
    img.src = images[currentImgIndex];

    if (currentImgIndex === 0) {
        prevImgBtn.classList.add('none');
    } else {
        prevImgBtn.classList.remove('none');
    }

    if (currentImgIndex === images.length - 1) {
        nextImgBtn.classList.add('none');
    } else {
        nextImgBtn.classList.remove('none');
    }

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImgIndex);
    });
}

prevImgBtn.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
    img.src = images[currentImgIndex];
    updateImage();
});

nextImgBtn.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    img.src = images[currentImgIndex];
    updateImage();
});

updateImage();