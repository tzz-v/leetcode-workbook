// 使用栈存储路径，把当前目录压入栈中，遇到‘..’,弹出栈顶，遇到‘.’和空串不做处理，

function simplifyPath(path: string): string {
  const res = [];
  let cur = '';
  for (let i = 1; i < path.length; i++) {
    if (path[i] !== '/') {
      cur += path[i];
    } else {
      parsePath(cur, res);
      cur = '';
    }
  }
  parsePath(cur, res);
  return `/${res.join('/')}`;
}

const parsePath = (name: string, res: string[]) => {
  if (!name || name === '.') return;
  if (name === '..') {
    res.pop();
    return;
  }
  res.push(name);
};
