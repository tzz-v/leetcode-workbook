# 保龄球游戏的获胜者

> 英文标题：Determine the Winner of a Bowling Game
> 
> 难度：Easy
> 
> 标签：数组, 模拟
> 

## 题目描述

给你两个下标从 0 开始的整数数组 player1 和 player2 ，分别表示玩家 1 和玩家 2 击中的瓶数。

保龄球比赛由 n 轮组成，每轮的瓶数恰好为 10 。

假设玩家在第 i 轮中击中 xi 个瓶子。玩家第 i 轮的价值为：


	如果玩家在该轮的前两轮的任何一轮中击中了 10 个瓶子，则为 2xi 。
	否则，为 xi 。


玩家的得分是其 n 轮价值的总和。

返回


	如果玩家 1 的得分高于玩家 2 的得分，则为 1 ；
	如果玩家 2 的得分高于玩家 1 的得分，则为 2 ；
	如果平局，则为 0 。


 

示例 1：


输入：player1 = [5,10,3,2], player2 = [6,5,7,3]

输出：1

解释：

玩家 1 的分数为 5 + 10 + 2*3 + 2*2 = 25。

玩家 2 的分数为 6 + 5 + 7 + 3 = 21。


示例 2：


输入：player1 = [3,5,7,6], player2 = [8,10,10,2]

输出：2

解释：

玩家 1 的分数为 3 + 5 + 7 + 6 = 21。

玩家 2 的分数为 8 + 10 + 2*10 + 2*2 = 42。


示例 3：


输入：player1 = [2,3], player2 = [4,1]

输出：0

解释：

玩家 1 的分数为 2 + 3 = 5。

玩家 2 的分数为 4 + 1 = 5。


示例 4：


输入：player1 = [1,1,1,10,10,10,10], player2 = [10,10,10,10,1,1,1]

输出：2

解释：

玩家 1 的分数为 1 + 1 + 1 + 10 + 2*10 + 2*10 + 2*10 = 73。

玩家 2 的分数为 is 10 + 2*10 + 2*10 + 2*10 + 2*1 + 2*1 + 1 = 75。


 

提示：


	n == player1.length == player2.length
	1 <= n <= 1000
	0 <= player1[i], player2[i] <= 10

## 示例测试用例

```
[5,10,3,2]
[6,5,7,3]
[3,5,7,6]
[8,10,10,2]
[2,3]
[4,1]
[1,1,1,10,10,10,10]
[10,10,10,10,1,1,1]
```


