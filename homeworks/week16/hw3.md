## Hoistion - 請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。
```javascript
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```
### 輸出結果：
`undefined 5 6 20 1 10 100`

### 執行步驟：
1. 建立 global EC
```
global EC:{
  VO:{
    a: undefined,
    fn: function
  }
  scope chain:[globalEC.VO]
}
```
`fn.[[Scope]] = globalEC.scopeChain = globalEC.VO`

2. 執行 `var a = 1` => `globalEC.VO.a = 1`
執行 `fn()`，進入 fn

3. 建立 fn EC
```
fnEC:{
  AO:{
    a: undefined,
    fn2: function
  }
  scope chain:[fnEC.AO, globalEC.VO]
}
```
`fn.[[Scope]] = fn.scopeChain = fnEC.AO, globalEC.VO`

4. 執行 `console.log(a)` 在 fuEC 裡找到 a = undefined => 印出 undefined <br>
執行 `a = 5` => `fnEC.AO.a = 5`<br>
執行 `console.log(a)` => 在 fnEC 裡找到 a = 5 => 印出 5<br>
執行 `a++` => `fnEC.AO.a = 6`<br>
執行 `fn2()`，進入 fn2<br>

5. 建立 fn2 EC
```
fn2EC:{
  AO:{}
  scope chain:[fn2EC.AO, fnEC.AO, globalEC.VO]
}
```

6. 執行 `console.log(a)` => f2nEC 裡找不到 a => 在往上層 fnEC 裡找到 a = 6 => 印出 6<br>
執行 `a = 20`，在 fn2EC 找不到 a => 在往上層找 fnEC 裡找到 a => `fnEC.AO.a = 20`<br>
執行 `b = 100`，在 fn2EC 找不到 b => 在往上層找 fnEC 找不到 b => 在往上層找 globalEC.VO，設定 `b = 100`

7. fn2 執行完，清空抽走 fn2 EC

8. 執行 `console.log(a)` ，在 fnEC 裡找到 a = 20，印出 20

9. fn 執行完，清空抽走 fn EC

10. 執行 `console.log(a)`，在 globalEC 裡找到 a = 1，印出 1

11. 執行 `a = 10`，`globalEC.VO.a = 10`

12. 執行 `console.log(a)`，在 globalEC 裡找到 a = 10，印出 10

13. 執行 `console.log(b)`，在 globalEC 裡找到 b = 100，印出 100