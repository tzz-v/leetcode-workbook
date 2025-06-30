# 找出可整除性得分最大的整数

> 英文标题：Find the Maximum Divisibility Score
> 
> 难度：Easy
> 
> 标签：数组
> 

## 题目描述

给你两个整数数组 nums 和 divisors 。

divisors[i] 的 可整除性得分 等于满足 nums[j] 能被 divisors[i] 整除的下标 j 的数量。

返回 可整除性得分 最大的整数 divisors[i] 。如果有多个整数具有最大得分，则返回数值最小的一个。

 

示例 1：


输入：nums = [2,9,15,50], divisors = [5,3,7,2]

输出：2

解释：

divisors[0] 的可整除性分数为 2 因为 nums[2] 和 nums[3] 能被 5 整除。

divisors[1] 的可整除性分数为 2 因为 nums[1] 和 nums[2] 能被 3 整除。

divisors[2] 的可整除性分数为 0 因为 nums 中没有数字能被 7 整除。

divisors[3] 的可整除性分数为 2 因为 nums[0] 和 nums[3] 能够被 2 整除。

因为 divisors[0] 、divisor[1] 和 divisors[3] 有相同的可整除性分数，我们返回更小的那个 divisors[3]。


示例 2：


输入：nums = [4,7,9,3,9], divisors = [5,2,3]

输出：3

解释：

divisors[0] 的可整除性分数为 0 因为 nums 中没有数字能被 5 整除。

divisors[1] 的可整除性分数为 1 因为只有 nums[0] 能被 2 整除。

divisors[2] 的可整除性分数为 3 因为 nums[2] ，nums[3] 和 nums[4] 能被 3 整除。


示例 3：


输入：nums = [20,14,21,10], divisors = [10,16,20]

输出：10

解释：

divisors[0] 的可整除性分数为 2 因为 nums[0] 和 nums[3] 能被 10 整除。

divisors[1] 的可整除性分数为 0 因为 nums 中没有数字能被 16 整除。

divisors[2] 的可整除性分数为 1 因为 nums[0] 能被 20 整除。

因为 divisors[0] 的可整除性分数最大，我们返回 divisors[0]。


 

提示：


	1 <= nums.length, divisors.length <= 1000
	1 <= nums[i], divisors[i] <= 109

## 示例测试用例

```
[2,9,15,50]
[5,3,7,2]
[4,7,9,3,9]
[5,2,3]
[20,14,21,10]
[10,16,20]
```


