/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {

  //将每个字符的数量进行统计，并生成新的数组
  // ["bella"] => [{'b': 1,'e': 1,'l': 2,'a': 1}]
  const arr = words.map(item => {
      const obj = {};
      item.split('').forEach(char => {
          if (obj[char]) {
              obj[char] = obj[char] + 1;
          } else {
              obj[char] = 1
          }
      })
      return obj
  });

  const result = [];
  for (let char in arr[0]) {
      let len = arr[0][char];
      // 循环arr和第一项进行比较，取当前项每个字符存在的最小值，
      arr.forEach(item => {
          if (!item[char]) {
              len = 0;
          } else {
              len = len <= item[char] ? len : item[char];
          }
      })
      // len 存在将字符 char push len次 到result数组里；
      if (len) {
          for(len; len > 0;len--) {
              result.push(char);
          } 
      }
  };
  return result;
};