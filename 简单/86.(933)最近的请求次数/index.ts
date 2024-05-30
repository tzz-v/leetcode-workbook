class RecentCounter {
  constructor() {}
  history: number[] = [];
  index = 0;

  ping(t: number): number {
    this.history.push(t);
    while (this.history[this.index] && t - 3000 > this.history[this.index]) {
      this.index++;
    }
    return this.history.length - this.index;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
