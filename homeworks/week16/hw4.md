## What is this? - 請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。
```javascript
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```

### 輸出結果：
2 2 undefined

### 執行步驟：
`obj.inner.hello()` <br>
=> obj.inner.hello.call(obj.inner) <br>
=> this.value = obj.inner.value <br>
=> 2

`obj2.hello()` <br>
=> obj2.hello.call(obj2)<br>
=> this.value = obj.inner.value <br>
=> 2

`hello()` <br>
=> hello.call(global) <br>
=> this.value = global.value <br>
=> undefined