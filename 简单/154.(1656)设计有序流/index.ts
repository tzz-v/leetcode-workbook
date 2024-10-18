class OrderedStream {
  public ptr = 1;
  public arr = [''];
  public len: number;
  constructor(n: number) {
      this.len = n + 1;
  }

  insert(idKey: number, value: string): string[] {
      this.arr[idKey] = value;
      const res = [];
      if (idKey !== this.ptr) return res;
      for (this.ptr; this.ptr < this.len; this.ptr++) {
          if (!this.arr[this.ptr]) break;
          res.push(this.arr[this.ptr]);
      };
      return res;
  }
}

/**
* Your OrderedStream object will be instantiated and called as such:
* var obj = new OrderedStream(n)
* var param_1 = obj.insert(idKey,value)
*/