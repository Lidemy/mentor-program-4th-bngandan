## Webpack 是做什麼用的？可以不用它嗎？
### Webpack 是做甚麼用的？
Webpack 是打包模組的工具，可以把不同檔案的模組集合到一份檔案內，在打包的過程能夠進行額外的處理，例如打包 JS 時做 uglify。 <br>
打包後檔案能夠方便引入網頁做使用。

### 可以不用它嗎？
如果開發的項目規模不大或是沒有用到那麼多模組，可以不用 Webpack，依照產品的規模來選擇適合的工具來使用即可。

## gulp 跟 webpack 有什麼不一樣？
### Gulp：
task manager，**管理任務** 的工具，它能夠將你所有想完成的任務（如：發送 API、JS 進行 uglify 等等 ) 集中起來管理，可以一次處理完要做的事情。

### Webpack：
moudle bundler，簡單講就是將我們的 module 打包在一起，做一些轉換，讓他可以在瀏覽器上使用。


## CSS Selector 權重的計算方式為何？
!important > inline style (html tag 定義的 style)> id > class > tag > *
