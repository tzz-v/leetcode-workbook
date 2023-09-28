// 需要一个变量用来存储历史记录。
// 需要一个变量用来存储当前网页的位置。来控制网页的前进和后退
// 当访问新页面时，移除当前位置之后的历史记录

class BrowserHistory {
  public history: string[] = [];
  public index = -1;
  constructor(homepage: string) {
    this.history[0] = homepage;
    this.index++;
  }

  visit(url: string): void {
    this.history.splice(++this.index);
    this.history[this.index] = url;
  }

  back(steps: number): string {
    this.index -= Math.min(this.index, steps);
    return this.history[this.index];
  }

  forward(steps: number): string {
    this.index += Math.min(steps, this.history.length - this.index - 1);
    return this.history[this.index];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
