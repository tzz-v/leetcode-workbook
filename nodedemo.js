const fs = require('fs');
const func = () => {
  setTimeout(() => {
    console.log('timeout 1');
  }, 10);
  Promise.resolve().then(() => {
    console.log('promise 1');
  });
  process.nextTick(() => {
    console.log('next 1');
    process.nextTick(() => {
      console.log('next 2');
    });
  });
  process.nextTick(() => {
    console.log('next 3');
  });
};

// 定义一个 wait 方法
function wait(mstime) {
  let date = Date.now();
  while (Date.now() - date < mstime) {
    // do nothing
  }
}

func();
