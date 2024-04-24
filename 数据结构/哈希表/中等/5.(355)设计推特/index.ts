// 1. 数据结构：
//  a. 需要一个数据结构存储用户关注列表，根据用户id查询关注用户。（使用哈希存储）
//  b. 需要一个数据结构存储所有文章。
// 2. 实现获取文章功能：
//  a. 从全部文章中筛选出当前用户的文章和当前用户关注者的文章。
//  b. 返回前10条。
// 3. 实现发布文章功能：存储文章的id和用户id
// 4. 实现关注用户功能：存储关注的用户id；
// 5. 实现取消关注用户功能：移除关注用户的id

class Twitter {
  public userFollowInfo = new Map<number, number[]>();
  public tweetList = new Set<{ tweetId: number; userId: number }>();
  constructor() {}

  postTweet(userId: number, tweetId: number): void {
    this.tweetList.add({ tweetId, userId });
  }

  getNewsFeed(userId: number): number[] {
    const tweetList = Array.from(this.tweetList.values());
    const userFollowInfo = this.userFollowInfo.get(userId) ?? [];
    const res = tweetList
      .filter((tweet) => [...userFollowInfo, userId].includes(tweet.userId))
      .map((tweet) => tweet.tweetId);
    return res.reverse().slice(0, 10);
  }

  follow(followerId: number, followeeId: number): void {
    const followList = this.userFollowInfo.get(followerId) ?? [];
    if (followList.length) {
      followList.push(followeeId);
    } else {
      this.userFollowInfo.set(followerId, [followeeId]);
    }
  }

  unfollow(followerId: number, followeeId: number): void {
    const followList = this.userFollowInfo.get(followerId) ?? [];
    const i = followList.findIndex((id) => id === followeeId);
    if (i > -1) {
      followList.splice(i, 1);
    }
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
