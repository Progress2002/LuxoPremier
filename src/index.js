import './style.css';

import { DISPLAY } from './modules/homepage.js';
import selectedCardDetails from './modules/modal.js';

DISPLAY();

setInterval(() => {
  const commentButton = document.querySelectorAll('button.comment');

  commentButton.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonID = button.parentNode.parentNode.getAttribute('id');
      selectedCardDetails(parseInt(buttonID, 10));
    });
  });
}, 1000);