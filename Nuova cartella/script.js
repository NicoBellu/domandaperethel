// script.js

// Selezionando gli elementi dal DOM
const imageElement = document.getElementById('main-image');
const captionElement = document.getElementById('image-caption');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Variabili per gestire le immagini
let currentImageIndex = 1;

// Funzione per cambiare immagine
function changeImage() {
    currentImageIndex = currentImageIndex === 1 ? 2 : 1;  // Alterna tra 1 e 2
    const newImageSrc = `IMG/image.2.JPG`;  // Può essere sia .jpg che .JPG
    imageElement.src = newImageSrc;  // Imposta l’immagine
    captionElement.textContent = currentImageIndex === 1 ? '' : 'RISPOSTA ESATTA ❤️​';
     // Nascondi i bottoni e centrala
     yesButton.style.display = 'none';  
     noButton.style.display = 'none';
     
}


// Funzione per spostare il pulsante No in posizione casuale
function randomPosition(element) {
    const randomX = Math.floor(Math.random() * (window.innerWidth - element.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - element.offsetHeight));
    element.style.position = 'absolute';
    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

// Eventi dei bottoni
yesButton.addEventListener('click', changeImage);

noButton.addEventListener('click', () => {
    randomPosition(noButton);
});
