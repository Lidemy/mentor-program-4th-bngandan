## 請以自己的話解釋 API 是什麼
簡單來講就是透過 API 可以讓雙方交換資料。

API 又分成 **"使用 API"** 跟 **"提供 API"**：

1. 使用 API 就是要透過對方提供的 API 來拿取資料。
2. 提供 API 可以選擇哪一些資料可以讓對方拿取、哪一些不行。
3. 串接 API 就是丟一個 request 會得到一個相應的 response。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
* 409 Conflict：**表示請求與伺服器目前狀態衝突。**

* 414 URI Too Long：
**客戶端的 URI 請求超過伺服器願意解析的長度，因此伺服器拒絕對該請求提供服務。**

* 307 Temporary Redirect：**跟 302 很像，差別在於客戶端請求方法不變向新的地址發出請求**


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

URL：https://restaurant-news.com
|說明|Method|Path|參數|範例|
|:---:|:---:|:---:|:---:|:---:|
|回傳所有餐廳資料|GET|/restaurants|_limit:限制回傳資料數量|/restaurants?_limit=5
|回傳單一餐廳資料|GET|/restaurants/:id|無|/restaurants/10
|刪除餐廳|DELETE|/restaurants/:id|無|無|
|新增餐廳|POST|/restaurants|name:餐廳名稱|無|
|更改餐廳資訊|PATCH|/restaurants/:id|name:餐廳名稱|無|