// 使用哈希表存一下已存在的文件名称，以及他的下一后缀编号。
// 如存在同名的文件，找到其下一个后缀编号，开始逐一尝试添加后缀的新文件名是否已存在。
// 注： 根据后缀编号k 成功创建文件后，应更新两个哈希值，一个是新文件名，后缀编号为1；一个是重名文件，后缀编号是k+1

function getFolderNames(names: string[]): string[] {
  const map = new Map();
  for (let i = 0; i < names.length; i++) {
    if (map.has(names[i])) {
      let count = map.get(names[i]);
      while (map.has(generateName(names[i], count))) {
        count++;
      }
      map.set(names[i], count + 1);
      names[i] = generateName(names[i], count);
      map.set(names[i], 1);
    } else {
      map.set(names[i], 1);
    }
  }
  return names;
}

const generateName = (name: string, count: number) => {
  return `${name}(${count})`;
};
