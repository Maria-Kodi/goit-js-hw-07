import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('div.gallery');
makeGalleryMarkup();
galleryEl.addEventListener('click', onBasicLightboxOpen);

function makeGalleryMarkup() {
    const markup = galleryItems
    .map(({preview, original, description}) => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
            </a>
        </div>`
    )
    .join('');

    galleryEl.innerHTML = markup;
};

function onBasicLightboxOpen(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    };

    evt.preventDefault();

    const modalBigImg = basicLightbox
        .create(`<img src="${evt.target.dataset.source}" alt="${evt.target.alt}">`);
    
    modalBigImg.show();

    window.addEventListener('keydown', evt => {
        if (evt.code === 'Escape' && modalBigImg.visible()) {
            modalBigImg.close();
        }
    });
};
