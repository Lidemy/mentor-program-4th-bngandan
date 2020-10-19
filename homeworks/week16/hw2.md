## Event Loop + Scope - 請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。
```javascript
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
### 輸出結果：
i: 0
i: 1
i: 2
i: 3
i: 4

5
5
5
5
5

### 執行步驟：
1. for 迴圈進入 call stack 執行

2. i = 0，0 < 5 為 true<br>
`console.log('i:' + i)` 進入 call stack，印出 i:0，執行完畢，從 call stack pop 掉<br>
`setTimeout()` 進入 call stack，呼叫 web api 0 * 1000 ms 定時器，到期後將第一個參數 `() => {console.log(i)}` 放進 callback queues 等待被執行，`setTimeout()` 執行完畢，從 call stack pop 掉

3. i = 1，1 < 5 為 true<br>
`console.log('i:' + i)` 進入 call stack，印出 i:1，執行完畢，從 call stack pop 掉<br>
`setTimeout()` 進入 call stack，呼叫 web api 0 * 1000 ms 定時器，到期後將第一個參數 `() => {console.log(i)}` 放進 callback queues 等待被執行，`setTimeout()` 執行完畢，從 call stack pop 掉

4. i = 2，2 < 5 為 true<br>
`console.log('i:' + i)` 進入 call stack，印出 i:2，執行完畢，從 call stack pop 掉<br>
`setTimeout()` 進入 call stack，呼叫 web api 0 * 1000 ms 定時器，到期後將第一個參數 `() => {console.log(i)}` 放進 callback queues 等待被執行，`setTimeout()` 執行完畢，從 call stack pop 掉

5. i = 3，3 < 5 為 true<br>
`console.log('i:' + i)` 進入 call stack，印出 i:3，執行完畢，從 call stack pop 掉<br>
`setTimeout()` 進入 call stack，呼叫 web api 0 * 1000 ms 定時器，到期後將第一個參數 `() => {console.log(i)}` 放進 callback queues 等待被執行，`setTimeout()` 執行完畢，從 call stack pop 掉

6. i = 4，4 < 5 為 true<br>
`console.log('i:' + i)` 進入 call stack，印出 i:4，執行完畢，從 call stack pop 掉<br>
`setTimeout()` 進入 call stack，呼叫 web api 0 * 1000 ms 定時器，到期後將第一個參數 `() => {console.log(i)}` 放進 callback queues 等待被執行，`setTimeout()` 執行完畢，從 call stack pop 掉

7. i = 5，5 < 5 為 false，跳出 for 迴圈，for 迴圈結束執行，從 call stack pop 掉

8. event loop 偵測到 call stack 目前完全清空，開始把 callback queues 裡的 function 依照先進先出的順序依序將 function 丟進 call stack 裡

9. `() => {console.log}` 丟入 call stack，`console.log(i)` 進入 call stack 執行，印出 5，結束執行從 call stack pop 掉，`()=> {console.log(i)}`結束執行從 call stack pop 掉

10. 重複第 9 步驟 4 次，印出 4 個 5

11. 程式執行結束
