// 一维 DP 通用模板
function oneDimensionalDP(n: number): number {
  // 1. 初始化 dp 数组（根据题意定义长度）
  const dp: number[] = new Array(n + 1).fill(0);

  // 2. 边界初始化（base case）
  dp[0] = 0;
  dp[1] = 1;

  // 3. 遍历计算状态
  for (let i = 2; i <= n; i++) {
    // 4. 状态转移方程（核心！根据题目修改）
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // 5. 返回结果
  return dp[n];
}
