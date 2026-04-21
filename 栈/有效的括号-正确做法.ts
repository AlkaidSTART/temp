function isValid1(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char in map) {
      // 遇到右括号，检查是否匹配栈顶的左括号
      const top = stack.pop() || "#";
      if (map[char] !== top) {
        return false;
      }
    } else {
      // 遇到左括号，压入栈中
      stack.push(char);
    }
  }

  // 栈为空说明所有括号都匹配
  return stack.length === 0;
}
