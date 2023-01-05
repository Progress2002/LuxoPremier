import CARD_API from './apiUrl.js';
import { postLike, getLikesData } from './likeApi.js';
import selectedCardDetails from './modal.js'; //eslint-disable-line 

export const getApiData = async (URL) => {
  const res = await fetch(URL);
  const result = await res.json();
  return result;
};

const showContainer = document.querySelector('.show-container');
const MovieCount = document.querySelector('.movie-counter');

const renderLikes = async () => {
  const likesData = await getLikesData(CARD_API);
  const cards = document.querySelectorAll('.cards');
  cards.forEach((card) => {
    const cardIDs = card.getAttribute('id');
    likesData.forEach((data) => {
      const likesDataID = data.item_id;
      const { likes } = data;
      if (cardIDs === likesDataID) {
        const likeCount = card.childNodes[3].childNodes[3];
        likeCount.innerHTML = likes;
      }
    });
  });
};

const renderCommentPopup = () => {
  const commentButton = document.querySelectorAll('button.comment');

  commentButton.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonID = button.parentNode.parentNode.getAttribute('id');
      selectedCardDetails(parseInt(buttonID, 10));
    });
  });
};

export const DISPLAY = async () => {
  const shows = await getApiData(CARD_API);
  const showLength = 50;
  for (let i = showLength; i > 0; i -= 1) {
    const index = Math.floor(Math.random() * 50);
    showContainer.innerHTML += ` 
    <li class="cards" id="${shows[index].id}">
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
        <p class="like-btn"><i class="fa-regular fa-heart like-btn-icon"></i></p>
        </li>
        <p class="likes"></p> 
      </ul>
      <div class="btn-comment">
        <button class="comment" >Comments</button>
      </div>
    </li>
    `;
  }
  MovieCount.innerHTML = showLength
  renderLikes();
  renderCommentPopup();

  const likeBtnIcon = document.querySelectorAll('i.like-btn-icon');
  likeBtnIcon.forEach((button) => {
    button.addEventListener('click', async () => {
      const parentDiv = button.parentNode.parentNode.parentNode.parentNode;
      const likeID = parentDiv.getAttribute('id');
      const likeCount = parentDiv.childNodes[3].childNodes[3];
      const likeCountValue = parseInt((likeCount.innerHTML), 10);
      if (likeCount.innerHTML === '') {
        likeCount.innerHTML = 1;
      } else {
        likeCount.innerHTML = likeCountValue + 1;
      }
      postLike({ item_id: likeID });
    });
  });
};