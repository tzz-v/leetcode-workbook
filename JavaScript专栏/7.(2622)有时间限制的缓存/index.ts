// 创建一个私有属性state，用于存储对象数据。
// get()和count()方法好实现，返回相应的属性和长度即可。
// set()方法需要增加一个销毁属性的功能。并且支持重置。因此需要一个额外的对象来维护定时器。在根据key创建定时器之前，先移除可能存在的旧的定时器。

class TimeLimitedCache {
  constructor() {}

  private state: Record<string, number> = {};
  private timer: Record<string, any> = {};

  set(key: number, value: number, duration: number): boolean {
    const res = !!this.state[key];
    this.state[key] = value;
    clearTimeout(this.timer[key]);
    this.timer[key] = setTimeout(() => {
      delete this.state[key];
      this.timer[key] = null;
    }, duration);
    return res;
  }

  get(key: number): number {
    return this.state[key] ?? -1;
  }

  count(): number {
    return Object.keys(this.state).length;
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
