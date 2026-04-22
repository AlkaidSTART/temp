type 定义三种状态
类里 5 个属性：状态、成功值、失败值、两个回调数组
构造器：写 resolve + reject + 执行 executor
then：判断状态 → 执行 / 存回调 → 返回新 Promise
catch：调用 then
