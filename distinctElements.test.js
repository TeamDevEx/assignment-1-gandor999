const { distinctElements } = require('./distinctElements');

describe('distinctElements', () => {
  test.each([
    [3, [{ postId: 1 }, { postId: 2 }, { postId: 3 }]],
    [2, [{ postId: 1 }, { postId: 1 }, { postId: 3 }]],
    [4, [{ postId: 1 }, { postId: 2 }, { postId: 3 }, { postId: 6 }]]
  ])('should return %i if input is %o', (expected, response) => {
    expect(distinctElements(response)).toBe(expected);
  });
});
