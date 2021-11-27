const add = (a, b) => a + b;
test('add test', () => {
    expect(add(1, 2)).toBe(3);
});
const hello = () => {
    return 'hello world';
};
test('hello world', () => {
expect(hello()).toEqual('hello world');
});

// beforeAll(() => {
//     console.log('0');
// });
// beforeEach(() => {
//     console.log('1');
// });
// afterEach(() => {
//     console.log('2');
// });
// afterAll(() => {
//     console.log('3');
// });
// jest.mock('fs', {
//     readFile: jest.fn(() => 'wscats'),
// });

// const fs = require('fs');
// test('fs test', () => {
//     const text = fs.readFile();
//     expect(text).toBe('wscats');
// });
