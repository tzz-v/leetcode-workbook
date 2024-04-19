// 空间换时间，时间换空间；
// 数组根据下标的快速查询的时间复杂度是O(1)；
// 哈希表的插入和删除的时间复杂度是O(1)；
// 想要这三个操作的时间复杂度都为O(1),那就牺牲点空间，使用两个数据结构同时维护一组数据。

class RandomizedSet {
  arr: number[] = [];
  map = new Map();

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }
    const i = this.arr.length;
    this.arr.push(val);
    this.map.set(val, i);
    return true;
  }

  remove(val: number): boolean {
    const i = this.map.get(val);
    if (i === undefined) return false;
    this.arr[i] = this.arr[this.arr.length - 1];
    this.map.set(this.arr[i], i);
    this.arr.pop();
    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    const len = this.arr.length;
    const i = Math.floor(Math.random() * len);
    return this.arr[i];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
