/*
function openLightbox(imageSrc, textContent) {
    var lightbox = document.getElementById('lightboxContainer');
    var lightboxImage = document.querySelector('.lightbox-image');
    var textContainer = document.getElementById('textContainer');

    lightbox.style.display = 'flex';
    lightbox.classList.add('blurred-background');

    lightboxImage.innerHTML = '';

    lightboxImage.src = imageSrc;
    textContainer.innerHTML = textContent;
}
*/

function openLightbox(images, textContent) {
    var lightbox = document.getElementById('lightboxContainer');
    var lightboxImage = document.querySelector('.lightbox-image');
    var textContainer = document.getElementById('textContainer');

    lightbox.style.display = 'flex';
    lightbox.classList.add('blurred-background');
    
    var imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    images.forEach(function (imageSrc){
        var img = document.createElement('img');
        img.src = imageSrc;
        imageContainer.appendChild(img);
    });

    lightboxImage.innerHTML = '';
    lightboxImage.appendChild(imageContainer);

    textContainer.innerHTML = textContent;
}

document.addEventListener('DOMContentLoaded', function () {
    var lightbox = document.getElementById('lightboxContainer');
    var lightboxImage = document.querySelector('.lightbox-image');
    var textContainer = document.getElementById('textContainer');
    var xButton = document.getElementById('xButton');

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
            lightbox.classList.remove('blurred-background');
            textContainer.innerHTML = '';
        }
    });

    xButton.addEventListener('click', function(){
        lightbox.style.display = 'none';
        lightbox.classList.remove('blurred-background');
        textContainer.innerHTML = '';
    })

    lightboxImage.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    textContainer.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});