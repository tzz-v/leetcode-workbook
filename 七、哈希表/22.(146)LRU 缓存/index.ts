// 利用map，获取值后将值重新设置到map里；
// 超过容量后，移除map的第一个值（最久未使用）

class LRUCache {
  public capacity: number;
  public map = new Map<number, number>([]);
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    const val = this.map.get(key);
    if (val) {
      this.map.delete(key);
      this.map.set(key, val);
    }
    return val ?? -1;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      this.map.delete(key);
    }
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
