// 增加一个有序数组用来维护日程。
// 使用二分查找，检查日程是否重复

class MyCalendar {
  arr: [number, number][] = [];
  constructor() {}

  book(start: number, end: number): boolean {
    let x = 0;
    let y = this.arr.length - 1;

    while (x <= y) {
      const mid = Math.floor((x + y) / 2);
      if (start >= this.arr[mid][1]) {
        x = mid + 1;
      } else if (end <= this.arr[mid][0]) {
        y = mid - 1;
      } else {
        return false;
      }
    }
    this.arr.splice(x, 0, [start, end]);
    return true;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
