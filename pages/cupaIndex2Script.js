function openLightbox(imageSrc, textContent) {
    var lightbox = document.getElementById('lightboxContainer');
    var lightboxImage = document.querySelector('.lightbox-image');
    var textContainer = document.getElementById('textContainer');

    lightbox.style.display = 'flex';
    lightbox.classList.add('blurred-background');
    lightboxImage.src = imageSrc;
    textContainer.innerHTML = textContent;
}

document.addEventListener('DOMContentLoaded', function () {
    var lightbox = document.getElementById('lightboxContainer');
    var lightboxImage = document.querySelector('.lightbox-image');
    var textContainer = document.getElementById('textContainer');

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
            lightbox.classList.remove('blurred-background');
            textContainer.innerHTML = '';
        }
    });

    lightboxImage.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    textContainer.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});