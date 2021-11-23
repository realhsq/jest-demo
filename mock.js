const jest = {
  fn(impl = () => { }) {
      const mockFn = (...args) => {
          mockFn.mock.calls.push(args);
          return impl(...args);
      };
      mockFn.originImpl = impl;
      mockFn.mock = { calls: [] };
      return mockFn;
  },
  mock(mockPath, mockExports = {}) {
      const path = require.resolve(mockPath, { paths: ["."] });
      require.cache[path] = {
          id: path,
          filename: path,
          loaded: true,
          exports: mockExports,
      };
  }
};

let add = require('./utils/add').add; // 正常引入外部模块的add
console.log(add(1, 2));

// jest.mock('./utils/add', {
//   add: jest.fn((a, b) => (a + b + 1))
// });
// add = require('./utils/add').add; // 引入mock后的add
// console.log(add(1, 2));