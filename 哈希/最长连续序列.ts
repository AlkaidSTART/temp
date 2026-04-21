//思路
//set去重，set是一个集合，简易哈希表
// 1. 创建
// const set = new Set();
// const set = new Set(数组); // 自动去重

// // 2. 增删查
// set.add(value); // 添加
// set.has(value); // 判断是否存在（返回 boolean）
// set.delete(value); // 删除
// set.clear(); // 清空

// // 3. 属性
// set.size; // 元素个数

// // 4. 遍历
// for (const item of set) {
// }
// set.forEach(item => {});

function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  const map = new Map<number, number>();
  let max = 0;
  const set = new Set(nums);
  for (const num of set) {
    if (set.has(num - 1)) continue;
    {
      let cur = num;
      let curCount = 1;
      while (set.has(cur + 1)) {
        cur++;
        curCount++;
      }
      max = Math.max(max, curCount);
    }
  }
  return max;
}
