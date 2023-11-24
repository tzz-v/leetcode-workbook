const fs = require('fs');
const func = () => {
  setTimeout(() => console.log('setTimeout'), 1000);

  new Promise((res) => {
    console.log('promise before 1');
    res();
  }).then(() => {
    console.log('promise 1');
    new Promise((res) => {
      console.log('promise before 2');
      res();
    }).then(() => {
      console.log('promise 2');
    });
  });

  fs.readFile('./poll.js', () => {
    console.log('read 1');
    fs.readFile('./poll.js', () => {
      console.log('read 2');
    });
    wait(2000);
  });
  fs.readFile('./poll.js', () => {
    console.log('read 3');
    wait(20);
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
