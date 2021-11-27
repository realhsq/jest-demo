const hello = () => {
  return 'hello world';
};
describe('a', () => {
  beforeEach(() => {
    console.log('1');
  });
  test('should', () => {
    expect(hello()).toEqual('hello world');
  });
});


test('should1', () => {
  expect(hello()).toEqual('hello world');
});

// beforeAll(() => {
//   console.log('0');
// });
// beforeEach(() => {
//     console.log('1');
// });
// afterEach(() => {
//     console.log('2');
// });
// afterAll(() => {
//   console.log('3');
// });