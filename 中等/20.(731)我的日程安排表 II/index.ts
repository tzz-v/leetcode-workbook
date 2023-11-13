// 维护两个数组，确保添加的时间不会导致三重预定

class MyCalendarTwo {
  arr: [number, number][] = [];
  doubleArr: [number, number][] = [];

  book(start: number, end: number): boolean {
    for (let item of this.doubleArr) {
      if (start >= item[1] || end <= item[0]) continue;
      return false;
    }
    for (let item of this.arr) {
      if (start >= item[1] || end <= item[0]) continue;
      this.doubleArr.push([Math.max(start, item[0]), Math.min(end, item[1])]);
    }
    this.arr.push([start, end]);
    return true;
  }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
