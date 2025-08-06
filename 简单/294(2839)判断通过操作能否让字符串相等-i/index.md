# 判断通过操作能否让字符串相等 I

> 英文标题：Check if Strings Can be Made Equal With Operations I
> 
> 难度：Easy
> 
> 标签：字符串
> 

## 题目描述

给你两个字符串 s1 和 s2 ，两个字符串的长度都为 4 ，且只包含 小写 英文字母。

你可以对两个字符串中的 任意一个 执行以下操作 任意 次：


	选择两个下标 i 和 j 且满足 j - i = 2 ，然后 交换 这个字符串中两个下标对应的字符。


如果你可以让字符串 s1 和 s2 相等，那么返回 true ，否则返回 false 。

 

示例 1：


输入：s1 = "abcd", s2 = "cdab"
输出：true
解释： 我们可以对 s1 执行以下操作：
- 选择下标 i = 0 ，j = 2 ，得到字符串 s1 = "cbad" 。
- 选择下标 i = 1 ，j = 3 ，得到字符串 s1 = "cdab" = s2 。


示例 2：


输入：s1 = "abcd", s2 = "dacb"
输出：false
解释：无法让两个字符串相等。


 

提示：


	s1.length == s2.length == 4
	s1 和 s2 只包含小写英文字母。

## 示例测试用例

```
"abcd"
"cdab"
"abcd"
"dacb"
```


