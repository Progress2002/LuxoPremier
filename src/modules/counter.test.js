/**
 * @jest-environment jsdom
 */
import { commentsCount, showsCount, likesCount } from '../modules/counter'  //eslint-disable-line 

describe('Count the number or likes', () => {
  test('comments = [{name: "Progress", message: "Nice"}, {name: "Kennedy", message: "Great"}] expect "2"', () => {
    document.body.innerHTML = '<button class="comment">comment</button>';
    const preComments = [{ name: 'Desmond', message: 'Nice' },
      { name: 'Tushar', message: 'Great' }];
    const newComment = { name: 'Mike', message: "I don't love this movie" };
    expect(commentsCount(preComments, newComment)).toEqual(3);
  });
  test("[show1, show2, show3, show4] expect length to be '4'", () => {
    const shows = ['show1', 'show2', 'show3', 'show4'];
    const result = showsCount(shows);
    expect(result).toBe(4);
  });

  test('Assume previous likes is "14" expect "15" ', () => {
    document.body.innerHTML = '<span class="like-symbol">14</span>';
    expect(likesCount(14)).toBe(15);
  });
});