const hello = () => {
  return 'hello world';
}

test('should', () => {
  expect(hello()).toBe('hello world');
})