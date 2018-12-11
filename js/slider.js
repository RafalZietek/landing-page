const showSlider = document.querySelector('section.modal-wrap');
const activeImage = document.querySelector('section.modal-wrap .image');
const nextImage = document.querySelector('.next');
const prevImage = document.querySelector('.prev');
const description = document.querySelector('.description');
let pIndex = 0;

// images pobrane w main.js - line 30
// const images = [...document.querySelectorAll('.images')];

// zamkniecie slider'a
document.querySelector('.hidden').addEventListener('click', function () {
    showSlider.classList.remove('showSlider');
    images.forEach(image => {
        image.classList.remove('active');
    });
    pIndex = 0;
});


function showGallery(e) {
    //pokazanie slidera
    showSlider.classList.add('showSlider');
    //nadanie klikniętemu obrazkowi klasę active
    this.classList.add('active');
    //pobranie indeksu klikniętego obrazka z 
    const pictureIndex = images.findIndex(image => image.classList.contains('active'));

    activeImage.innerHTML = `<image src = 'img/gallery-image-${pictureIndex+1}.jpg'>`;
    pIndex = pictureIndex;
	
	//pokazanie strzałek
	prevImage.style.display = 'block';
    nextImage.style.display = 'block';	
	if (pIndex == 5) {
        nextImage.style.display = 'none';
    }
	if (pIndex == 0) {
        prevImage.style.display = 'none';
    }
    description.innerHTML = `Zdjęcie ${pictureIndex+1} z ${images.length}`
}

function next() {
    pIndex++;
    if (pIndex == 5) {
        nextImage.style.display = 'none';
    }
    activeImage.innerHTML = `<image src = 'img/gallery-image-${pIndex+1}.jpg'>`;
    prevImage.style.display = 'block';
	description.innerHTML = `Zdjęcie ${pIndex+1} z ${images.length}`
}

function prev() {
    pIndex--;
    if (pIndex == 0) {
        prevImage.style.display = 'none';
    }    
    activeImage.innerHTML = `<image src = 'img/gallery-image-${pIndex+1}.jpg'>`;
    nextImage.style.display = 'block';
	description.innerHTML = `Zdjęcie ${pIndex+1} z ${images.length}`
}


images.forEach(image => {
    image.addEventListener('click', showGallery);
});
nextImage.addEventListener('click', next);
prevImage.addEventListener('click', prev);