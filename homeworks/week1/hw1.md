## 交作業流程

1. 先到 GitHub 下載檔案到 local 端：**git clone https://github.com/Lidemy/mentor-program-4th-bngandan.git**
2. 創建 branch：**git branch hw1**
3. 切換到創建的 branch：**git checkout hw1**
4. 開始寫作業
5. 如果有新增的檔案，要加到 git 內：**git add .**
6. 寫完作業後，進行 commit：**git commit -am "hw1"**
7. 上傳到遠端 GitHub：**git push origin hw1**
8. 到自己的 GitHub，發起 Pull Request
9. 把 PR 的連結複製，放到學習系統上繳交作業

等助教作業改完，作業列表顯示 “ 已批改 ”，Github 上也顯示 Merged ：

1. 切換到 master：**git checkout master**
2. 把最新的改動下載下來：**git pull origin master**
3. 刪除已經 merge 的 branch ： **git branch -d hw1**
