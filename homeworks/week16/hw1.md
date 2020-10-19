## Event Loop - 請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因
``` javascript
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
### 輸出結果：
1 3 5 2 4

### 執行步驟：
1. `console.log(1)`<br>
進入 call stack 執行，印出 1，執行結束從 call stack 裡 pop 掉
2. `setTimeout()` <br>
進入 call stack 執行，`setTimout()` 是 web api 呼叫瀏覽器設定 0 ms 到期的定時器，進到 webapi 執行，執行結束從 call stack 裡 pop 掉，執行結束 webapi 裡 pop 掉，`()=>{console.log(2)}` 進入 callback queues 等到被執行
3. `console.log(3)`<br>
進入 call stack 執行，印出 3，執行結束從 call stack 裡 pop 掉
4. `setTimeout()` <br>
進入 call stack 執行，`setTimout()` 是 web api 呼叫瀏覽器設定 0 ms 到期的定時器，進到 webapi 執行，執行結束從 call stack 裡 pop 掉，執行結束 webapi 裡 pop 掉，`()=>{console.log(4)}` 進入 callback queues 等到被執行
5. `console.log(5)`<br>
進入 call stack 執行，印出 5，執行結束從 call stack 裡 pop 掉
6. event loop 偵測到 call stack 目前完全清空，開始把 callback queues 裡的 function 依照先進先出的順序依序將 function 丟到 call stack 裡
7. `()=>{console.log(2)`<br>
進入 call stack 執行，`console.log(2)` 進入 call stack 執行，印出 2，`console.log(2)`執行結束從 call stack 裡 pop 掉，`()=>{console.log(2)`執行結束從 call stack 裡 pop 掉
8. event loop 偵測到 call stack 目前完全清空，開始把 callback queues 裡的 function 依照先進先出的順序依序將 function 丟到 call stack 裡
9. `()=>{console.log(2)`<br>
進入 call stack 執行，`console.log(2)` 進入 call stack 執行，印出 2，`console.log(2)`執行結束從 call stack 裡 pop 掉，`()=>{console.log(2)`執行結束從 call stack 裡 pop 掉
10. 程式整個執行完畢

