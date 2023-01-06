/**
 * @jest-environment jsdom
 */
import { commentsCount, showsCount } from './Counter.js';  //eslint-disable-line 

describe('Count the number or likes', () => {
  test('comments = [{name: "Progress", message: "Nice"}, {name: "Kennedy", message: "Greate"}] expect "2"', () => {
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
});