/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable  eol-last */

export const cssTemplate = ".card { margin-top: 12px; }"

export function getForm(className, commentsClassName) {
  return `
  <div>
    <form class="${className}">
      <div class="form-group">
        <label>暱稱</label>
        <input name="nickname" type="text"" class="form-control" aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label>留言內容</label>
        <textarea name="content" class="form-control" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">送出</button>
    </form>
    <div class="${commentsClassName}">
    </div>
  </div>`
}

export function getLoadMoreButton(className) {
  return `<button class='${className} btn btn-primary mt-2'>載入更多</button>`
}