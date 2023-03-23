const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const mainImg = document.querySelector('.ms_main-img');//identifico con la varibaile mainImg il contenitore ms_main-img
console.log(mainImg);
const listImg = document.querySelector('.ms_list-img');//identifico con la varibaile listImg il contenitore ms_list-img
console.log(listImg);
createImgs(listImg);
let mainContent = document.querySelector('.ms_main-content');
const upBtn = document.querySelector('.up');//individuo, tramite upBtn, il pulsante up
const downBtn = document.querySelector('.down');//individuo, tramite downBtn, il pulsante down
/**
al click di uno dei due pulsanti si deve 'illuminare' l'immagine corrispondente a quella mostrata nel main img
 */
let counter = 0;
let mainUrl = `url('../${images[counter].image}')`;
mainImg.style.backgroundImage = mainUrl;
mainContent.innerHTML = `<h2>${images[counter].title}</h2><p>${images[counter].text}</p>`;
upBtn.addEventListener('click', prevIMG);
downBtn.addEventListener('click', nextIMG);
//////////LATO DELLE FUNZIONI
function createImgs(imgContainer) {
    for (let i = 0; i < images.length; i++) {//assegnazione automatica delle immagini in listImg
        let currentImg = images[i].image;//prendo direttamente l'url dell'immagine tramite la var currentImg
        let url = `url('../${currentImg}')`;//creo un url da immettere inline in ogni div per effettuare il background
        let imgCol = document.createElement('div');//creo l'elemento div dove inserirò l'immagine
        imgCol.classList.add('ms_img-col');//ci aggiungo la classe ms_img-col
        imgCol.classList.add('dark');//abbasso la luminosità delle immagini di default
        imgCol.style.backgroundImage = url;//aggiungo lo stile inline al div
        imgContainer.append(imgCol);//lo inserisco in ms_list-img
    }
    return imgContainer;
}
function nextIMG() {
    let currentMainImg = images[counter];
    let imgList = document.querySelector('ms_img-col');
    mainContent.innerHTML = `<h2>${images[counter].title}</h2><p>${images[counter].text}</p>`;
    let mainUrl = `url('../${currentMainImg.image}')`;
    mainImg.style.backgroundImage = mainUrl;
    if (counter === images.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
}
function prevIMG() {
    let currentMainImg = images[counter];
    mainContent.innerHTML = `<h2>${images[counter].title}</h2><p>${images[counter].text}</p>`;
    let mainUrl = `url('../${currentMainImg.image}')`;
    mainImg.style.backgroundImage = mainUrl;
    console.log('counter', counter);
    console.log('current', currentMainImg);
    if (counter === 0) {
        counter = images.length - 1;
    } else {
        counter--;
    }
}
const automaticCarousel = setInterval(prevIMG,3000);