/*Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.
Le immagini devono essere 5 e nella grafica devono essere presenti:
- immagine in evidenza
- thumbnail di tutte le immagine con in evidenza l’immagine attiva
- bottone avanti e indietro*/

const immagini =[
  {
    titolo: 'Svezia',
    descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores et maxime corrupti inventore.',
    foto: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
  },
  {
    titolo: 'Perù',
    descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores et maxime corrupti inventore. dolor sit amet.',
    foto: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'
  },
  {
    titolo: 'Cile',
    descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores et maxime.',
    foto: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'
  },
  {
    titolo: 'Argentina',
    descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores et maxime corrupti inventore.',
    foto: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'
  },
  {
    titolo: 'Colombia',
    descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores et maxime corrupti inventore. consectetur adipisicing elit',
    foto: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'
  },
]

console.log(immagini);

//stampo dinamicamente le immagini

const slider = document.querySelector('.slider');
const itemsWrapper = document.querySelector('.items-wrapper');
const description =document.querySelector('.description');
const containerSmall = document.querySelector('.container-small')
let counterImages = 0;

immagini.forEach (immagini => {
  itemsWrapper.innerHTML += `<img class = "item" src="${immagini.foto}" alt="${immagini.titolo}">`
  description.innerHTML += `<h1>${immagini.titolo}</h1>
  <p>${immagini.descrizione}</p>`
  description.classList.add('hide');
  containerSmall.innerHTML += `<div class="item-small">
  <img class="mini-item" src="${immagini.foto}" alt="${immagini.titolo}">`

});

const items = document.getElementsByClassName('item')
const miniItem = document.getElementsByClassName('item-small')
items[counterImages].classList.add('active');
miniItem[counterImages].classList.add('active-small');

// salvo le chevrons in delle costanti
const prev = document.querySelector('.left');
const next = document.querySelector('.right');
//prev di default è hide
prev.classList.add('hide');

//all'evento click di next e prev cambia l'immagine
next.addEventListener('click', nextImg);

prev.addEventListener('click', prevImg);

function nextImg(){
  items[counterImages].classList.remove('active');
  items[++counterImages].classList.add('active');
  //miniItem[counterImages].classList.remove('active-small');
  //miniItem[++counterImages].classList.add('active-small')

  prev.classList.remove('hide')

  if(counterImages === immagini.length - 1){
    next.classList.add('hide');
  }
};  

function prevImg(){
  items[counterImages].classList.remove('active');
  items[--counterImages].classList.add('active');
  //miniItem[counterImages].classList.remove('active-small');
  //miniItem[--counterImages].classList.add('active-small');
  
  
  next.classList.remove('hide');
  if(counterImages === 0){
    prev.classList.add('hide')
  }

}