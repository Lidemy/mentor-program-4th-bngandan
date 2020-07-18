## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. **< audio >** ：跟 img 很像，只是 src 變成放上音樂檔，就能播放音樂。
2. **< u >**：被包住的內容會有底線。
3. **< strong >**：會變成粗體，但是有強調的意味，跟 < b > 不一樣 b 只是單純粗體而已。
## 請問什麼是盒模型（box modal）
![boxmodel.png](https://i.loli.net/2020/07/18/lxNYIOUveGmXjPW.png)<br>

在 html 可以把每個元素都當成一個盒子，可以使用 CSS 來調整這些盒子的屬性。<br>

box model：content（內容） + padding（內邊距） + border（邊框） + margin（外邊框）

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* block：可以設定寬高，但會占用一整行，下個物件會排在下一行。<br>
* inline：設定寬高無效，內容多長他就會多長，可以與其他物件並排，padding設定還是會有效果。<br>

* inline-block：把 block 與 inline 的優點集合，可以設定寬高，可以與其他物件並排。<br>

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* static：是預設值，不會被特別定位。
* relative：沒設定屬性就跟static 一樣，使用 top right bottom left 來控制他顯示的位置，而他本身這個物件還是在原本的位置，只是偏移顯示而已，可以稱它為 **相對偏移** 。
* absolute：定位點往上找第一個 position 不是 static 的元素，來做絕對定位。 
* fixed：視窗固定定位，假設我設定在視窗正中央，不管我怎樣使用滾輪他都會卡視窗中間。

### position: static, relative, absolute 跟 fixed 的差別？
前面三個都是會固定在網頁上面，我只要滾動滾輪就會跟著滾輪上下，fixed 的部分是會卡在視窗畫面，不管怎麼滾動滾輪他依舊固定在原本的視窗顯示畫面的位置。

