## 什麼是 DOM？
DOM 簡單來說就是瀏覽器提供給 JavaScript 來改變畫面上面（HTML）的東西。<br>
DOM 就是讓 JavaScript 跟 Html 中間有個橋樑。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
假設我們在 html 裡面新增一個 ul ，ul 裡面新增一個 li，li 裡面新增一個 a，a 我們給他新增一個 eventListener ，我們點擊 a 的時候發生甚麼？<br>

#### 捕獲階段（Capture Phase）：
點 a 的那一刻，點擊這個事件會從 window 一直往下傳到 a 為止。 <br>
而這個過程就是 **捕獲階段**

**Window → Document → < html > → < body > → < ul > → < li > → < a >**
#### 目標階段（Target Phase）：
這個階段已經到我們點擊的元素，會處理我們讓他處理的事情<br>

**< a >**
#### 冒泡階段（Bubbling Phase）：
處理完事情後，會在從 a 一路傳回去 Window<br>
這個過程就是 **冒泡階段**

**< a > → < li > → < ul > → < body > → < html > → Document → Window**

![](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)
這張圖是引用至 [W3.org](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)<br>
從這張圖就能夠非常明確知道，捕獲 → 目標 → 冒泡
## 什麼是 event delegation，為什麼我們需要它？
Event delegation 翻成中文為 **"事件代理"**，如果子層是同類型的東西例如多個按鈕，我們可以將監聽事件寫在父層，由父層來監聽這個事件，不需要對每個按鈕去個別監聽。<br>
因為一按下按鈕一定會冒泡到父層，父層就能夠知道按了哪個按鈕，可以減少多餘的監聽。<br>

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
**event.preventDefault**：取消瀏覽器預設的行為，跟事件傳遞無關。<br>
例如：表單不讓他送出、超連結點了沒有反應、讓輸入框特定的文字不能輸入等等。

**event.stopProagation**：讓事件不再往下傳遞，也不會冒泡。<br>
例如：

``` html
<button class='btn'>click me</button>
```

在按鈕上新增一個點擊監聽事件，我們點下按鈕時會出現 click 的彈跳窗口。
```javascript
document.querySelector('.btn').addEventListener('click',function(e){
  alert('click')
})
```

如果我們將 window 新增一個點擊監聽事件，內容放上 e.stopProagation，不管我們點哪裡，點擊這個事件都不會傳過 window 後面，你也會發現按鈕怎麼按都不會出現彈跳窗口，那是因為他已經阻止事件繼續傳遞下去。
``` javascript
window.addEventListener('click',function(e){
  e.stopProagation()
},ture)
````