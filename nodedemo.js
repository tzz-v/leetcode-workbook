const fs = require('fs');

Promise.resolve().then(() => {
  console.log('主线程 promise.then');
});
console.log('主线程 START');
setTimeout(() => {
  console.log('外层timers阶段：timeout');
  setTimeout(() => {
    console.log(`timers阶段：timeout`);
    Promise.resolve().then(() => {
      console.log('timeout的 promise.then');
    });
  }, 0);
  fs.readdir(__dirname, (err, files) => {
    if (err) throw err;
    Promise.resolve().then(() => {
      console.log('poll阶段：readdir-Promise.then');
    });
    process.nextTick(() => console.log('poll阶段：readdir-nextTick'));
    console.log(
      `poll阶段：fs.readdir() callback: 文件包含 ${files.length} 个文件`
    );
  });
  setImmediate(() => {
    console.log('CHECK 阶段 setInterval.setImmediate');
    Promise.resolve().then(() => {
      console.log('CHECK 阶段 微任务 setImmediate-.Promise.then');
    });
  });
}, 10);

console.log('主线程 END');
