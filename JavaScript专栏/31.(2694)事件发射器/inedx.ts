// 自定义事件发射器。
// 感觉使用Map和Set来存储比较方便点。

type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  private events: Map<string, Set<Callback>> = new Map();
  subscribe(eventName: string, callback: Callback): Subscription {
    const fns = this.events.get(eventName) ?? new Set();
    fns.add(callback);
    this.events.set(eventName, fns);
    return {
      unsubscribe: () => {
        this.events.get(eventName)?.delete(callback);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any {
    return (
      [...(this.events.get(eventName) ?? [])].map((fn) => fn(...args)) ?? []
    );
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
