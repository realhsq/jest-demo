/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * @author enoyao
 */

const vm = require("vm");
const path = require("path");
const fs = require("fs");
const assert = require("assert");


// const testPath = 'jest.test.js';
// const code = fs.readFileSync(path.join(process.cwd(), testPath)).toString();

const dispatch = event => {
    const { fn, type, name, pass } = event;
    switch (type) {
        case "ADD_TEST":
            const { testBlock } = global["STATE_SYMBOL"];
            testBlock.push({ fn, name });
            break;
        // case "BEFORE_EACH":
        //     const { beforeEachBlock } = global["STATE_SYMBOL"];
        //     beforeEachBlock.push(fn);
        //     break;
        // case "BEFORE_ALL":
        //     const { beforeAllBlock } = global["STATE_SYMBOL"];
        //     beforeAllBlock.push(fn);
        //     break;
        // case "AFTER_EACH":
        //     const { afterEachBlock } = global["STATE_SYMBOL"];
        //     afterEachBlock.push(fn);
        //     break;
        // case "AFTER_ALL":
        //     const { afterAllBlock } = global["STATE_SYMBOL"];
        //     afterAllBlock.push(fn);
        //     break;
        // case "COLLECT_REPORT":
        //     const { reports } = global["STATE_SYMBOL"];
        //     reports.push({ name, pass });
        //     break;
    }
};

const createState = () => {
    global["STATE_SYMBOL"] = {
        testBlock: [],
        // beforeEachBlock: [],
        // beforeAllBlock: [],
        // afterEachBlock: [],
        // afterAllBlock: [],
        // reports: []
    };
};

createState();

// const jest = {
//     fn(impl = () => { }) {
//         const mockFn = (...args) => {
//             mockFn.mock.calls.push(args);
//             return impl(...args);
//         };
//         mockFn.originImpl = impl;
//         mockFn.mock = { calls: [] };
//         return mockFn;
//     },
//     mock(mockPath, mockExports = {}) {
//         const path = require.resolve(mockPath, { paths: ["."] });
//         require.cache[path] = {
//             id: path,
//             filename: path,
//             loaded: true,
//             exports: mockExports,
//         };
//     }
// };

// const expect = (actual) => ({
//     toBe(expected) {
//         if (!Object.is(actual, expected)) {
//             throw new Error(`${actual} is not equal to ${expected}`);
//         }
//     },
//     toEqual(expected) {
//         try {
//             assert.deepStrictEqual(actual, expected);
//         } catch {
//             throw new Error(`${JSON.stringify(actual)} is not equal to ${JSON.stringify(expected)}`);
//         }
//     },
// });

const context = {
    // console: console.Console({ stdout: process.stdout, stderr: process.stderr }),
    // jest,
    // expect,
    // require,
    // afterAll: (fn) => dispatch({ type: "AFTER_ALL", fn }),
    // afterEach: (fn) => dispatch({ type: "AFTER_EACH", fn }),
    // beforeAll: (fn) => dispatch({ type: "BEFORE_ALL", fn }),
    // beforeEach: (fn) => dispatch({ type: "BEFORE_EACH", fn }),
    test: (name, fn) => dispatch({ type: "ADD_TEST", fn, name })
};

// (async () => {
//     const start = new Date();

//     // vm.createContext(context);
//     // vm.runInContext(code, context);

//     const { testBlock, beforeEachBlock, beforeAllBlock, afterEachBlock, afterAllBlock } = global["STATE_SYMBOL"];
//     // beforeAllBlock.forEach(async (beforeAll) => await beforeAll());

//     await new Promise((resolve) => {
//         testBlock.forEach(async (item) => {
//             const { fn, name } = item;
//             try {
//                 // beforeEachBlock.forEach(async (beforeEach) => await beforeEach());
//                 await fn.call();
//                 // dispatch({ type: "COLLECT_REPORT", name, pass: 1 });
//                 // afterEachBlock.forEach(async (afterEach) => await afterEach());
//             } catch (error) {
//                 // dispatch({ type: "COLLECT_REPORT", name, pass: 0 });
//                 console.error("\x1B[37m", error);
//             }
//         });
//         resolve();
//     })

//     // afterAllBlock.forEach(async (afterAll) => await afterAll());
//     // const end = new Date();
//     // console.log("\x1b[32m%s\x1b[0m", `Time: ${end - start} ms`);
//     // const { reports } = global["STATE_SYMBOL"];
//     // reports.forEach((val) => {
//     //     if (val.pass === 1) {
//     //         console.log("\x1b[32m%s\x1b[0m", `√ ${val.name} passed`);
//     //     } else {
//     //         console.log("\x1b[91m", `× ${val.name} error`);
//     //     }
//     // })
// })();

// test block
context.test('test block', () => {
    console.log('my test block');
})
  
global["STATE_SYMBOL"].testBlock[0].fn();

// assertion and matcher
// context.test('assertion and matcher1', () => {
//     try {
//         expect({a: 1}).toBe({a: 1});
//         console.log('success');
//     } catch (e) {
//         console.log('failed');
//     }
// })

// context.test('assertion and matcher2', () => {
//     try {
//         expect({a: 1}).toEqual({a: 1});
//         console.log('success');
//     } catch (e) {
//         console.log('failed');
//     }
// })

// global["STATE_SYMBOL"].testBlock[0].fn();
// global["STATE_SYMBOL"].testBlock[1].fn();