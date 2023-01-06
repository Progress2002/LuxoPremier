const commentsCount = (preComments, newComment) => {
  const comment = document.querySelector('.comment');
  let totalComments = preComments;
  comment.addEventListener('click', () => {
    totalComments = preComments.push(newComment);
  });
  comment.click();
  return totalComments;
};

const showsCount = (shows) => shows.length;

export { commentsCount, showsCount };