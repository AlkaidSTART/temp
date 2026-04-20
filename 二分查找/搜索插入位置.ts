function searchInsert(nums: number[], target: number): number {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i); // 将数组元素及其索引存入map中
  }
  if (map.has(target)) {
    return map.get(target)!; // 如果map中存在target，返回其索引
  } else {
    let i = 0;
    while (i < nums.length) {
      if (nums[i] > target) {
        return i; // 如果当前元素大于target，返回当前索引
      }
      if (target > nums[i] && target < nums[i + 1]) {
        return i + 1; // 如果target大于当前元素且小于下一个元素，返回下一个索引
      }
      i++;
    }
    return nums.length;
  }
}
