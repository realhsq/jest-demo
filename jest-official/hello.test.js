const hello = () => {
  return 'hello world';
}

test('should', () => {
  expect(hello()).toEqual('hello world');
})