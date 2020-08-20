## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
varchar :可變長度，可以設字元的最大長度，可以有預設值。

text : 最多可保存 65535 個字符，不可有預設值。

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
**Cookie 是甚麼？**<br>
Cookie 是用來辨識用戶身分的資料，能夠讓 server 端接收到資料來判斷這個使用者是不是跟上一個是同一個人。


**設定 cookie：**<br>
可以透過 server 端使用 set-cookie 這個函式來設定 cookie，將 cookie 附加在 header 上回傳到 client 端。

**瀏覽器把 cookie 帶去 server：**<br>
Client 端發送 request 時，會將 cookie 附加在 request 中一起送到 server 端。


## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
1. 使用 html 標籤會導致顯示異常。<br>
例如在 comment 的框框輸入 < h1 > title < /h1 >，按下發送留言，會顯示 title 並不會顯示標籤，其他的標籤也會有這樣的問題存在。
2. 密碼是存為明碼，當資料庫被駭客入侵時，資料庫的密碼就都會被駭客知道。

