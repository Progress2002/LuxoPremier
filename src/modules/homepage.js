import CARD_API from './apiUrl.js';

export const getApiData = async (URL) => {
  const res = await fetch(URL);
  const result = await res.json();
  return result;
};

const showContainer = document.querySelector('.show-container');

export const DISPLAY = async () => {
  const shows = await getApiData(CARD_API);
  const showLength = 30;
  for (let i = showLength; i > 0; i -= 1) {
    const index = Math.floor(Math.random() * 200);
    showContainer.innerHTML += ` 
    <li class="cards">
      <div class="card-image">
      <a href="${shows[index].url}" target="blank">
        <img
        src="${shows[index].image.medium}"
        alt="${shows[index].name} image" />
      </a>
      </div>
      <ul class="card-body">
        <li class="likes-container">
        <p>${shows[index].name}</p>
        <p class="like-btn"><i class="fa-regular fa-heart"></i></p>
        </li>
        <p class="likes">0</p> 
      </ul>
      <div class="btn-comment">
        <button class="comment" id="${shows[index].id}">Comments</button>
      </div>
    </li>
    `;
  }
};

