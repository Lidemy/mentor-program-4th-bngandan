/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable prefer-const */
/* eslint-disable quote-props */
/* eslint-disable  import/no-unresolved */
/* eslint-disable  import/order */
/* eslint-disable  no-alert */
/* eslint-disable  prefer-destructuring */
/* eslint-disable  import/prefer-default-export */
/* eslint-disable  no-restricted-syntax */

import { getComments, addComments } from "./api"
import { appendCommentToDOM, appendStyle } from "./utils"
import { cssTemplate, getLoadMoreButton, getForm } from "./template"
import $ from "jquery"

export function init(options) {
  let siteKey = "";
  let apiUrl = "";
  let containerElement = null;
  let commentsDOM = null;
  let lastId = null;
  let isEnd = false;
  let loadMoreClassName
  let commentsClassName
  let commentsSelector
  let formClassName
  let formSelector

  function getNewComments() {
    commentsDOM = $(commentsSelector);
    $(`.${loadMoreClassName}`).hide()
    if (isEnd) {
      return
    }

    getComments(apiUrl, siteKey, lastId, (data) => {
      if (!data.ok) {
        alert(data.message);
        return
      }
      const comments = data.discussions;
      for (let comment of comments) {
        appendCommentToDOM(commentsDOM, comment);
      }
      let length = comments.length
      if (length === 0) {
        isEnd = true
        $(`.${loadMoreClassName}`).hide();
      } else {
        lastId = comments[length - 1].id
        const loadMoreButtonHTML = getLoadMoreButton(loadMoreClassName)
        $(commentsSelector).append(loadMoreButtonHTML);
      }
    })
  }

  siteKey = options.siteKey
  apiUrl = options.apiUrl
  loadMoreClassName = `${siteKey}-load-more`
  commentsClassName = `${siteKey}-comments`
  formClassName = `${siteKey}-add-comment-forms`
  commentsSelector = `.${commentsClassName}`
  formSelector = `.${formClassName}`

  containerElement = $(options.containerSelector)
  containerElement.append(getForm(formClassName, commentsClassName))

  appendStyle(cssTemplate)

  commentsDOM = $(commentsSelector);
  getNewComments()

  $(commentsSelector).on("click", `.${loadMoreClassName}`, () => {
    getNewComments()
  })

  $(formSelector).submit((e) => {
    e.preventDefault();
    const nicknameDom = $(`${formSelector} input[name=nickname]`)
    const contentDom = $(`${formSelector} textarea[name=content]`)

    const newCommentData = {
      "site_key": siteKey,
      "nickname": nicknameDom.val(),
      "content": contentDom.val(),
    }

    addComments(apiUrl, siteKey, newCommentData, (data) => {
      if (!data.ok) {
        alert(data.message);
        return
      }
      nicknameDom.val("");
      contentDom.val("");
      appendCommentToDOM(commentsDOM, newCommentData, true)
    })
  })
}
