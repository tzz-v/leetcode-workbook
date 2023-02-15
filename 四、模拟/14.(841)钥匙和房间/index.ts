// 模拟，使用深度优先遍历的方式，统计所有能进去的房间。最后判断是否有进不去的

function canVisitAllRooms(rooms: number[][]): boolean {
  const len = rooms.length;
  const arr = new Array(len).fill(false);
  const func = (i: number) => {
    if (arr[i]) return;
    arr[i] = true;
    for (const key of rooms[i]) {
      func(key);
    }
  };
  func(0);
  return arr.every((item) => item);
}
