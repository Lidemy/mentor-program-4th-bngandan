## 教你朋友 CLI

# 什麼是 Command line？

- A：另一種操作電腦的方法

操控電腦有兩種方式：

- GUI：圖形使用者介面，操作方便簡單，已圖像的方式來顯示，只要點選想要的即可。
- CLI：命令列介面，利用純文字來操作電腦的方法。

那為甚麼要使用 CLI 呢？

- A：因為有些時候的操作並沒有畫面、沒有圖形讓你點選，只能使用 CLI 來操作。

# 基本指令

- **pwd**：印出所在的位置(路徑)
- **ls**：印出現在資料夾底下的檔案
- **cd**：切換資料夾
  **cd ..**：回上一頁（回上一層）
  **cd 資料夾路徑**：進入到資料夾
  **cd ~**：回一開始的路徑， **~** 為一開始路徑的代稱
- **clear**：將畫面清空
- **man**：使用說明書（Git Bash 沒有內建此功能）

### 檔案與資料夾相關指令

- **touch**：建立檔案與更改時間
  1. 建立 hello.txt 檔案（沒這個檔案的前提）：
     **touch hello.txt**
  2. 更改 hello.txt 檔案時間為現在的時間（原本就有此檔案）:
     **touch hello.txt**
- **rm**：刪除檔案
  **rm hello.txt**：刪除 hello.txt 檔案
- **mkdir**：新增資料夾
  **mkdir test**：新增 test 資料夾
- **rmdir**：刪除資料夾
  **rmdir test**：刪除 test 資料夾，如果沒有這個指令（或裡面有檔案）使用下一個方法
  **rm -r test**：刪除 test 資料夾，包含此資料夾內的所有檔案都刪除
  **_再刪除前務必再次確認是否確定要刪除_**

> **在進入資料夾、刪除檔案、新增（刪除）資料夾輸入名稱時，打完開頭幾個字按下 tab 會自動幫你輸入完成，就不需要全部名稱打完**

- **mv**：移動檔案與改名
  1. 將 pig.txt 移動到 test 資料夾內：
     **mv pig.txt test**
  2. 將 pig.txt 移動到上一層：
     **mv pig.txt ..** ( 這邊要少一個 . )
  3. 將 pig.txt 改名為 hello：
     **mv pig.txt hello**

> 移動檔案有絕對路徑和相對路徑
> 絕對路徑：/c/Users/bngandan 開頭有 **/** 符號
> **mv pig /e/new**：將 pig 移動到 E 槽 new 資料夾內
> 相對路徑：我目前在這個位置資料夾
> **mv pig test**：將 pig 移動到 test 資料夾內

- **cp**：複製檔案
  **cp pig apple**：複製 pig 檔名改為 apple（這個位置會有兩個檔案 pig、apple）
- **cp -r test1 test2**：複製資料夾，複製 test1 資料夾 改名為 test2（這個位置會有兩個資料夾 test1、test2）

### vim 文字編輯器

- **vim hello**：進入 hello 編輯內容，會跑出一個頁面（vim 也可用 vi 後面接要編輯的檔案名稱）
- **i**：進入 INSERT 模式，才可開始輸入
- **ESC**：進入 普通 模式，可以刪除、複製、貼上，但就是不能輸入文字
- **:q**：按 Enter ，離開文字編輯器（在 WIN 如有編輯檔案，此功能無法退出；在 MAC 會問是否要儲存檔案 是、否、取消）
- **:wq**：按 Enter ，存檔並離開文字編輯器

※有些人會直接使用 vim 文字編輯器，來進行程式撰寫

### 其他好用指令

- **cat**：印出檔案內容
  **cat hello**：印出 hello 檔案內容
- **grep**：抓取關鍵字
  **grep h hello**：抓取 hello 這個檔案裡面有 h 的那幾行，並且印出
- **wget**：下載檔案，必須額外下載
  **wget 圖片位址**：就能夠下載那個位址的圖片
- **curl**：送出 request（未來比較會用到，暫時不會用到）

### 指令的組合技：pipe 與 redirection

- **>**：redirection 重新導向 input output
  **echo "123" > pig.txt**：將 pig.txt 內容全部清除，放入 123
  **cat pig.txt >> hello.txt**：將 pig.txt 內容新增至 hello.txt 後面（不會清除）
- **|**：串接指令，將左邊的輸出，變成右邊的輸入
  **cat pig.txt | grep o**：將 pig.txt 內容，交給 grep 抓取有 o 的那幾行，並且印出

# h0w 想要的功能

想用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。

1. 開啟 git bash 應用程式
2. **mkdir wifi**：建立 wifi 資料夾
3. **cd wifi**：進入 wifi 資料夾
4. **touch afu.js**：創建 afu.js 檔案
