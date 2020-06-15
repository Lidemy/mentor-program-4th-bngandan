## 跟你朋友介紹 Git

### GIT 是什麼

git 是幫你做版本控制的程式。

### 什麼是版本控制

舉個例，我們今天有個作業是要做一份 PPT 報告，通常做報告不太可能一次就完成，中間的過程會有很多個版本，一直不斷修改到最後產出最終的版本，EX. 第一版、第二版、第三版、Final 版、Finalfinal 版、SuperFinalfinal 版...，其實這樣的操作就算是**版本控制**。

這樣會發生幾個問題，難以比較各版本間的差異，也比較難判斷目前修改到哪個版本，在多人協作的情況下還有可能會給錯檔案或者跟別人取到相同的名字發生衝突。

Git 就是負責版本控制、解決以上問題的一個程式。

### 版本控制概念－用資料夾來解釋

1. 需要新版本：開一個新的資料夾，把檔案放入資料夾
2. 不想加入版控：不要加入資料夾
3. 避免版本號衝突：用看似亂數的東西當作資料夾名稱
4. 記住資料夾順序：用一個檔案來紀錄
5. 記住最新版本：用一個檔案來存

# Git 指令及操作流程

## 基本指令

- **git init**：創建一個 git 資料夾（初始化），裡面有預先配置好的東西
- **rm -r .git**：刪除 git
- **rm -rf .git**：刪除 git 包含裡面的檔案
- **git status**：顯示目前 git 狀態

## 決定是否加入版本控制

有兩種狀態：
**untracked**：沒有加入版本控制的檔案、**staged**：要加入版本控制的檔案

- **git add code.js**：將 code.js 加入版本控制
- **git add .**：將目前資料夾底下**所有的檔案**都加入版本控制
- **git rm --cached code.js**：將 code.js 移回 untracked 狀態

## 新建版本

- **git commit**：進入 vim 編輯器，輸入對該版本的敘述（**:q** 退出；**:wq** 存檔退出）
- **git commit -m "first commit"**：新建一個版本名稱叫 first commit
- **git commit -am "first commit"**：新建一個版本名稱叫 first commit
  > **※底下流程圖有講解 -m 與 -am 的差別** > **※ commit 可以想成 是新建一個資料夾**

## 歷史紀錄

- **git log**：顯示詳細歷史紀錄、commit ID、作者、建立時間、信息（也算是版本名稱）
- **git log --oneline**：顯示簡易歷史紀錄、commit ID 前七碼（代指 commit ID）、信息（版本名稱）

## 假設 code.js 檔案有進行修改，後續流程：

- **git diff**：在 commit 之前，查看這次修改的內容

1. **git status**：查詢狀態，會顯示有檔案被修改過，跑出兩個選擇
2. **git add code.js**：把修改過 code.js 加入 git
   **git restore code.js**：把 code.js 改回還未修改時的狀態
   > **我們選擇將 code.js 加入 git，使用 git status 查詢現在狀態，會跑出 untracked、staged 狀態** > **※ 每次只要修改過檔案，都必須將修改過的檔案加入 git → 創建新的 commit**
3. **git commit -m "second commit"**：建新版本名稱為 second commit
4. **git log**：這時會顯示兩個版本名稱 first commit、second commit
   > **※底下流程圖有講解檔案修改後的流程**

## 回到過去／現在的版本

- **git checkout b2dfb1b**：切換到 commit ID 為 **b2dfb1b** 的版本
  _（用 git log 查詢 commit ID 複製貼上到 checkout 後方）_
- **git checkout master**：切換回最新的狀態

## 要忽略的檔案（不想放入版本控制的檔案）

- **touch .gitignore**：創建 .gitignore
- **vim .gitignore**：輸入要被忽略的檔名，假設輸入 test，test 會放入 .gitignore（**i** 輸入；**ESC** 普通模式；**:wq** 存檔退出）
  _此時使用 git status 查詢狀態，只會顯示 .gitignore 因為我們已經將要忽略的檔案放入 .gitignore_
- **cat .gitignore**：顯示被忽略的檔案
  `※會放在 .gitgnore 都是一些使用者個人相關檔案、作業系統產生的檔案、對此專案不重要的檔案`

## Git 流程圖

![Git work flow](https://i.imgur.com/SzGFRYp.png)

---

# Branch 概念

![branch](https://i.imgur.com/DIq4GKi.png)

# Branch 指令

- **git branch -v**：顯示有哪些 Branch
  > **顯示 master 是主要的分支，會顯示最新的 commit 的版本號**
- **git branch new-feature**：新建一個名為 new-feature 的 Branch
  > 新建的概念會像是：
  > 將 master 複製一份命名為 new-feature，所以 new-feature 的 commit 版本編號也會與 master 一樣，只是名字不同而已
- **git branch -d new-feature**：刪除 new-feature 這個 branch

## 切換 branch

- **git checkout new-feature**：切換到 new-feature 的 branch
- **git checkout master**：切換回 master 的 branch
  > 這時使用 git branch -v 會顯示我們在 new-feature 這個 Branch
  > **※ 前面有 \* 的符號，名字也被反白，就是目前所在的 branch（下圖畫紅線的部分）** > ![切換branch](https://i.imgur.com/GVgvRtk.png)

## 合併 branch

- **git merge new-feature**：new-feature 合併進來我目前在的 branch
  > 簡單講：
  > **假設我目前在 master 這個 branch，我使用 git merge new-feature，就會將 new-feature 合併進來（也就是 master 會更新，擁有 new-feature 的資料）**，確定合併後就可以將 new-feature 的 branch 刪除

## 合併時遇到衝突 conflict

簡單講：
合併時，沒有衝突，就沒事
合併時 1.遇到衝突 2.點開衝突的檔案，將標記的地方修改後存檔 3.重新 commit 就完成了（遇到衝突必須手動完成）
以下舉個範例：
有兩個 branch，master、new-feature，我們都更改了 note.txt 裡面的第一行

1. 我們將 new-feature 合併進去 master 時，note.txt 遇到衝突（git 不知道要將哪個版本保留）
   （下圖）遇到衝突的狀況會顯示
   ![](https://i.imgur.com/cFFxdUs.png)
   **這張圖的意思就是在說，git 在合併時遇到衝突無法自動合併，需進行手動修改並且 commit**

接下來

2. 開啟衝突檔案
   ![](https://i.imgur.com/BW2VI76.png)
   ▼ 修改後，只留下要保留的內容，存檔
   ![](https://i.imgur.com/HQEaVdR.png)

3. 最後將修改後的檔案重新 commit 就完成了，也會存下 new-feature、master 的 commit
   ![](https://i.imgur.com/Kz0VXnc.png)

// 開發新功能開一個新的 branch 是一個好習慣

### 一般在 Git 做整合時會用到的指令（流程）：add → commit → branch → push → pull

---

# 狀況劇

## commit message 送出後發現打錯字如何修改

- **git commit --amend**：進入 Vim 編輯器，修改 commit message（**:wq** 存檔退出），git log 就可看到已修改後的名稱

如果你已經 commit 而且又 push 了，那就乖乖認命吧，這種情形下你在 local 端改的話可能會造成其他人的困擾。

**※ 最好的方法還是 push 之前先檢查一下，避免錯的東西被放到遠端。**

## 我 commit 了可是我又不想 commit 了

- **git rest HEAD^**：回到還沒 commit 前，但是保留已經修改完檔案的狀態，所以要重新在 commit
  **HEAD**：最新的 commit
  **^**：是指前一個的意思
  **HEAD^**：最新 commit 的前一個狀態（就是指上一個 Commit 狀態）

## 還沒 commit 可是已經修改檔案，要如何回到還沒修改檔案前的狀態

- **git restore note.txt**：將 note.txt 回到還未修改檔案前的狀態
- **git restore .**：將專案裡面所有檔案還沒 commit ，但已經修改過的檔案回復到未修改前的狀態
  範例：
  先用 vim 修改 note.txt → git status 查看狀態，發現 note.txt 有被修改過
  → 他給提示可以使用 git restore <file 名字>可以回復到還沒更改前的狀態（紅線處）
  → 輸入 git restore note.txt → 再次查閱狀態，會發現檔案回到還沒修改前
  ![](https://i.imgur.com/5Wyk5fS.png)

## 更改 branch 的名稱

- **git branch -m newpig**：將 branch 改名為 newpig（-m 後面輸入要改的名稱）

1. 先進入要修改名稱的 branch
2. 輸入 git branch -m newpig
3. 成功將 branch 改名為 newpig
   ![](https://i.imgur.com/j2XUyJK.png)

## 下載遠端的 branch

假設在 GitHub 上面，其他一起合作此專案的同事有上傳新的 Branch
我們想要下載這個新的 Branch 到 local

這邊舉例我們目前 local 只有 master，feature 是同事上傳的
只要直接輸入（下面的指令就成功下載）

- **git checkout feature**：下載 feature（我們要的 branch） 這個 branch 到 local
  ![](https://i.imgur.com/STlvySV.png)

# Git hook 用途觀念小小講解

發生某事的時候通知我
例如：有人 commit 、 push 通知我

通常都是使用在 commit 或是 push 之前，檢查是不是有放一些不該放的檔案、帳號密碼、改到不該改的東西、程式碼是否符合規範

# Git 與 GitHub 的邂逅

## Git vs GitHub

被 git 控制的一個專案叫做 **repository**

- **Git**：版本控制的程式
- **GitHub**：放 Git repository 的地方(其實還有更多功能)

## Git repository 放到 GitHub （創建）流程

1.

- **點右上角 + 號，按 New repository**（新建一個 GitHub 的 repository） ![first](https://i.imgur.com/cd5qub4.png)

2.

- **Repository name**：輸入名稱
- **Description**：輸入描述
- **選擇 Public，因為 Private 要錢**
- **按 Create repository**：創建 repository
  ![second](https://i.imgur.com/IlGCiig.png)

3.

- **複製第二部分內容在 git base 貼上，就會上傳（創建）成功**
  > 講解：
  > **第一個部分是如果沒有任何 repository，使用此方法** > **第二個部分是如果有 repository 的使用方法**

> 第二部分的講解：
> **git remote add origin https://github.com/bngandan/git-101-test.git**
> 意思是：架一個名為 origin 遠端的 repository 然後他的位址是後面那段網址
> **git push -u origin master**
> 意思是：將我們檔案，放上 origin 的 master

![third](https://i.imgur.com/vjGImG0.png)

## 在 GitHub 上修改檔案 流程

1. 點開要修改的檔案，旁邊的鉛筆按鈕（Edit this file）
2. 修改完檔案，點底下 commit changes 按鈕（完成 commit，GitHub 完成存檔）

## 更新（上傳）最新 Git repository 到 GitHub

電腦裡面的 git repository 跟 GitHub repository 是一樣的，**只是要同步的話必須手動同步**

- **git push -u origin master**：將 master 這個 branch 上傳到 GitHub
- **git push origin master**：也是將 master 這個 branch 上傳到 GitHub

### 上傳其他 branch（ex. hey） 到 GitHub

1. **先進入到 hey 的 branch，在輸入下面那行指令**
2. **git push origin hey**：將 hey 這個 branch 上傳到 GitHub
   （指令最後的 hey 就是代表要上傳的 branch）

> ※如果沒有上傳到 GitHub 也就是沒有 git push 的話，GitHub 是不會改變的，所以修改完必須要自行去上傳這個動作，檔案才能同步[color=#db0fab]

> ※ 如果 Github 內容比本地 Git repository 還要新，就會無法上傳，必須先 pull 一份到本地 Git，更新本地才可以開始修改，修改完才能進行上傳[color=#db0fab]

## 更新（下載）最新 GitHub repository 到本地 Git

GitHub 上面的資料進行修改後，與我們本地的 Git 檔案內容不一樣
**需手動下載下來將本地 Git 更新到最新的內容**

- **git pull origin master**：將 GitHub 上面的 **master** 下載下來，並且與本地 Git 進行**合併、更新**（指令輸入後會顯示，已經從遠端 GitHub 的網址下載下來，更改的檔案是哪個，最後與本地 Git 進行**合併**）

**狀況劇：**

**從 GitHub 下載到本地 Git 怎麼一樣遇到 Conflict（衝突），如何解決？**

A：我們先了解狀況，**從 GitHub 下載到本地 Git = 將 GitHub 檔案與本地 Git 檔案合併**
有沒有很熟悉，merge 遇到 conflict，一樣是檔案遇到衝突合併不了，解決方法與合併衝突一樣
來！解答請洽 [Merge 遇到 Conflict](https://hackmd.io/R8XPS2-WS6CX6gDMcEZaqw?view#%E5%90%88%E4%BD%B5%E6%99%82%E9%81%87%E5%88%B0%E8%A1%9D%E7%AA%81-conflict)

## 下載別人的 GitHub repository 到本地 Git 流程

如果今天看到別人的 GitHub repository 滿不錯，要如何下載？

1. 點（右紅色框選處），Clone or download
   ![](https://i.imgur.com/dYjBtA6.png)

2. 將網址複製（上圖紅色畫線處），到 git base 輸入 git clone 加剛剛複製的連結貼上 Enter，他就會將那份檔案複製一份到本地電腦
   ![](https://i.imgur.com/P90aKXt.png)

3. 輸入 cd 加獲得的檔案（進入到檔案內），修改要修改的部分，一樣要 commit
   ![](https://i.imgur.com/ixNWsjj.png)

**※ 最後不能 push 回去，為甚麼呢？
A：因為這份檔案是別人的 GitHub repository 我們沒有權限**

## 想要別人 GitHub repository 修改後放自己 GitHub repository 流程

1. 點（右上 Fork）
   ![](https://i.imgur.com/qAASdxJ.png)
2. 選擇要 Fork 的帳號

![](https://i.imgur.com/r8d2wr9.png)
▼ 顯示正在 Forking 到我們的 GitHub 中
![](https://i.imgur.com/yqmLuDL.png)
▼ 會發現前面帳號變成我們的名字（成功複製一份到我們的 GitHub 中）
![](https://i.imgur.com/XyvqMkr.png)

3. 下載一份到本地 Git repository[《流程就跟下載別人的一樣》](https://hackmd.io/oxqoRnOLTjKlMGp-LpM2fw?view#%E4%B8%8B%E8%BC%89%E5%88%A5%E4%BA%BA%E7%9A%84-GitHub-repository-%E5%88%B0%E6%9C%AC%E5%9C%B0-Git-%E6%B5%81%E7%A8%8B)
   （這時下載的是自己 GitHub 的檔案）
4. 修改完，進行 commit，最後你會發現可以 push 回來
   ![push](https://i.imgur.com/29r1zne.png)

### 關於下載別人、自己的 GitHub 檔案相關問題

**為甚麼可以 push 回自己的 GitHub 呢？**
A：因為你下載的檔案，是從你自己的 GitHub 下載（等於你有權限）， push 也是上傳到自己的 GitHub

**為甚麼下載別人的 GitHub repository 到本地 Git 沒辦法 push 回去？**
A:因為你沒有別人那份 GitHub 檔案的權限，所以無法上傳，反之你有權限就能夠 push

## 如何給別人權限？

1. 點 Settings → 點 Invite a collaborator（底下綠色按鈕），授權給其他合作者
   ![](https://i.imgur.com/MkPrVDr.png)
2. 輸入要授權的帳號，按下 Add 按鈕
   ![](https://i.imgur.com/M2xLHJm.png)
3. 顯示目前授權的對象有誰
   ![](https://i.imgur.com/jQCEOeW.png)

## 在 GitHub 執行 Merge branch 流程

優點：能夠直觀的看出哪些地方有做更動，在 Git Merge 就看不出變化

1. **點 Compare & pull request**（發起合併請求）
   ![](https://i.imgur.com/Wcdc2f1.png)
2. **紅色畫線處（顯示將 hey 合併到 master）**，下面能夠輸入請求標題、敘述，最底下會顯示兩個 Branch 的差別 → 接下來就**按 Create pull request**
   ![](https://i.imgur.com/4Kr0qDN.png)
3. **顯示想要把 hey 合併到 master**
   ![](https://i.imgur.com/GIPZfX2.png)
   ▼**往下拉點 Merge pull request** （合併請求讓 hey 合併到 master）
   ![](https://i.imgur.com/Rh9B4L0.png)
4. **點 Delete branch**，因合併完成後 hey 的資料 master 就有了，不需要 hey 所以刪除，**master 完成更新也刪除 hey 的 Branch**
   ![](https://i.imgur.com/g3H32jg.png)

## 有個觀念是 GitHub flow

一個專案要如何管理 Branch

1. 要開發新功能時，先創建一個 Branch，開發完上傳 GitHub
2. 使用 GitHub 的 pull request 功能，發一個 pull request
3. 通過之後，將 Branch 進行合併
4. 最後再將開發的 Branch 刪除，只留下有合併完的 master

# Git and GitHub 總結

這章節筆記內容：

1. **創建 GitHub 流程**
2. **上傳及下載的指令**
   **關於同步：
   Git repository 有更動過就 push 回 GitHub repository
   GitHub repository 有更動過就 pull 到 Git repository**
   簡單講，只要**修改後沒有上傳、下載，另外一邊就不會同步更新**
3. **在 GitHub 上修改檔案 流程**
4. **下載別人的 GitHub repository**
5. **Fork 別人的 GitHub repository 修改後放到自己 GitHub repository 流程**
6. **如何授權自己的檔案給別人**
7. **在 GitHub 執行 Merge branch 流程**
8. **關於 GitHub Flow 的觀念**
