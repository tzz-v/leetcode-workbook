class MyHashMap {
  public arr: Array<number | undefined> = [];

  put(key: number, value: number): void {
    this.arr[key] = value;
  }

  get(key: number): number {
    return this.arr[key] ?? -1;
  }

  remove(key: number): void {
    this.arr[key] = undefined;
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
