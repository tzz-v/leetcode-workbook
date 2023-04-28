// 不断查看obj的原型对象，直至null或者等于classFunction.prototype

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (
    obj === undefined ||
    obj === null ||
    classFunction === undefined ||
    classFunction === null
  )
    return false;
  obj = obj.__proto__;
  const prototype = classFunction.prototype;
  while (obj && obj !== prototype) {
    obj = obj.__proto__;
  }
  return obj === prototype;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
