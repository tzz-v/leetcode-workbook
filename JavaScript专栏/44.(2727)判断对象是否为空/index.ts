// 转成数组，查看对象key的长度是否为0；
function isEmpty(obj: Record<string, any> | any[]): boolean {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  return Object.keys(obj).length === 0;
}
