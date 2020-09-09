## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
### 雜湊：
是把資料丟進一串公式計算出一個結果，且無法反推回原本的資料。
雜湊還有一個特性，因為是將無限的輸入對應到有限的輸出，就代表一定會有不同的輸出卻是一樣的結果。

### 加密 ：
是把資料設定一個 key，加密與解密都必須要透過這個 key 才能夠進行，如果沒有這個 key 就比較無法拿到這個資料，我指的是像是 AES 這類 key 有超過 10 的 38 次方種，而 key 太少的安全性就相對非常低，因為可以透過暴力破解法來獲取 key。

### 為甚麼密碼要雜湊過後才存入資料庫？
因為今天資料庫被駭客入侵，如果密碼沒有雜湊過駭客就能拿到密碼，駭客可能就會拿你的密碼去各個網站嘗試去登入，這就非常危險了！

簡單講密碼要雜湊的理由就是，就算今天資料庫被駭客入侵他拿到的也只是雜湊過的密碼，所以非常安全。

## `include`、`require`、`include_once`、`require_once` 的差別
require() 一定要引入檔案，否則程式會中止，並返回致命錯誤<br>
include() 如果沒有引入該檔案，程式仍會執行，但會出現警告<br>

require_once() 會判斷之前引入的檔案是否已經引入過，如果載入過就不再載入<br>
include_once() 會判斷之前引入的檔案是否已經引入過，如果載入過就不再載入<br>

require 與 include 差別在於如果找不到該檔案，require 會將程式終止出現 Fatal error 致命錯誤，include 則是會繼續執行程式但會出現 Warning 警告。

## 請說明 SQL Injection 的攻擊原理以及防範方法
### 攻擊原理：
填入讓原本 SQL query 的意思不一樣的方法就叫做 SQL Injection，利用惡意的字串注入到 SQL query 當中，讓他變成截然不同的意思。

### 防範的方法：
Prepared statement，用 MySQL 內建的機制去做字串拼接，使用者輸入的東西都會被解析成 **字串**，這樣就不會改變原本我們要讓 SQL query 執行的動作。

##  請說明 XSS 的攻擊原理以及防範方法
### 攻擊原理：
在網站能輸入的地方植入程式碼

### 防範方法：
可以使用 php 跳脫字元內建函式 htmlspecialchars，此函式的功能是將特殊符號轉換成其他種形式，例如 & --> &amp;，使用這種方式就算使用者輸入惡意程式碼，特殊符號也會被轉乘其他種形式，也就不用擔心會出問題。


## 請說明 CSRF 的攻擊原理以及防範方法
### 攻擊原理：
大部分的網站都是用 cookie 或 session 的方式進行登入驗證，而 CSRF 就是透過這樣驗證機制，讓被攻擊者在不同網域下，不知不覺夾帶使用者資訊的 request 到被攻擊者登入過的網站 (還未過期的)，偽造被攻擊者的身分進行一些操作。


### 防禦方法：

#### 使用者防禦：
使用者能做的其實有限，可以在每次使用完網站就登出，這樣攻擊者就無法利用使用者處於登入狀態這一點去偽造身分進行操作。

#### Server 的防禦：

##### 檢查 Referer：
發送 request 瀏覽器的 request header 裡面會有 referer 這個欄位，referer 是代表這個 request 是從哪個地方過來，可以透過檢查 referer 看是不是合法的 domain，不是的話就直接 rejection 掉即可。

##### 加上圖形驗證碼、簡訊驗證碼等等：
攻擊者無法知道圖形驗證碼、簡訊驗證碼的答案是什麼，成功阻止攻擊。

##### 加上 CSRF token
在 form 裡面加上一個 hidden 的欄位，叫做 crsftoken，裡面的值是由 server 隨機產生，並存在 server 的 session，使用者 submit 後，server 會核對表單中的 crsftoken 是否跟 session 的 token 是一致的，是的話就能知道是本人發的 request。

##### Double submit cookie
由 server 產生一組隨機的 token 加在 form 上，在 Client side 設一個 csrftoken 的 cookie，值跟 server 產生的是同一組，當使用者 submit 的時候，server 比對 cookie 內的 csrftoken 與 form 裡面的 csrftoken 的值是否相等，就能夠知道是不是本人發送的。

##### client side 的 Double Submit Cookie:
跟上面的 Double submit cookie 基本上是差不多的，差別在於 token 是由 client 端產生的，主要目的為了讓攻擊者沒辦法讀寫目標網站的 cookie，所以 request 的 csrftoken 會與 cookie 內的不同。 

##### browser 本身的防禦-SameSite cookie:
設定 cookie 的時候後面加上 SameSite，代表 cookie 只允許 same site 使用，任何 cross site request 都不會被加上 cookie，瀏覽器驗證不是在同一個 site 所發出的 request，就不會帶上這個 cookie。

不同 domain 發出的 request 不會帶上使用者資訊的 cookie，這樣就能夠成功防禦。