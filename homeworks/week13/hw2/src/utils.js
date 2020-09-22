/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable  eol-last */

export function appendStyle(cssTemplate) {
  const styleElement = document.createElement("style")
  styleElement.type = "text/css"
  styleElement.appendChild(document.createTextNode(cssTemplate))
  document.head.append(styleElement)
}

export function escape(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function appendCommentToDOM(container, comment, isPrepend) {
  const html = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${escape(comment.nickname)}</h5>
        <p class="card-text">${escape(comment.content)}</p>
      </div>
    </div>
  `
  if (isPrepend) {
    container.prepend(html);
  } else {
    container.append(html);
  }
}