const func = () => {
  setTimeout(() => {
    console.log('timeout0');
    setTimeout(() => {
      console.log('timeout2');
    }, 20);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('timeout resolved');
      });
    }).then((res) => console.log(res));
    new Promise((resolve, reject) => {
      resolve('resolved');
    })
      .then((res) => {
        wait(3000);
        console.log(res);
      })
      .then(() => {
        console.log('你是最后吗');
      });
  }, 0);
};

// 定义一个 wait 方法
function wait(mstime) {
  let date = Date.now();
  while (Date.now() - date < mstime) {
    // do nothing
  }
}

func();
