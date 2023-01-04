import CARD_API from './apiUrl.js';
import { getApiData } from './homepage.js';

const modal = document.querySelector('#modal');
const body = document.querySelector('body');


const modalDisplay =(movie) => {
  modal.innerHTML = '';
  modal.innerHTML += `
  <div class="close-modal-btn">
      <button class="close-modal">X</button>
    </div>
    <div class="modal-image">
      <img src="${movie.image.medium}" alt="${movie.name} image">
    </div>
    <div class="modal-body">
      <h2 class="modal-title">${movie.name}</h2>
      <p class="modal-description">${movie.summary}</p>
    </div>
  `
  modal.classList.remove('hidden');
  body.classList.add('overflow');

  const closeModalBtn = document.querySelector('.close-modal');
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    body.classList.remove('overflow');
  })

}

const selectedCardDetails = async(id) => {
  const shows = await getApiData(CARD_API);
  shows.forEach(show => {
    if(show.id === id) {
      modalDisplay(show);
    }
  })
}

export default selectedCardDetails