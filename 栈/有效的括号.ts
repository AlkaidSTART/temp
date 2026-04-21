function isValid(s: string): boolean {
  const stack: string[] = [];
  const length = s.length;
  if (length % 2 !== 0) return false;
  for (let i = 0; i < length; i++) {
    if (i < length / 2) stack.push(s[i]);
    if (i >= length / 2) {
      if (s[i] === ")" && stack.pop() !== "(") return false;
      if (s[i] === "}" && stack.pop() !== "{") return false;
      if (s[i] === "]" && stack.pop() !== "[") return false;
    }
  }

  return true;
}
