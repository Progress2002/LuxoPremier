const POST_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/W3X13mPi4LXKYt13LQLN/comments';

export const getComment = async (ID) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/W3X13mPi4LXKYt13LQLN/comments?item_id=${ID}`);
  const result = await res.json();
  return result;
};

export const postComment = async (userInput) => fetch(POST_URL , {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(userInput),
})
  .then((response) => response.json())
  .then((data) => data.result);