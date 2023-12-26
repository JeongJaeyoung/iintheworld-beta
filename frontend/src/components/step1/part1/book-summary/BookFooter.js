// 책 : 이전 글, 다음 글 bar

import React from 'react'
import './BookFooter.css'

export default function BookFooter({leftLink, leftText, rightLink, rightText}) {
  return (
    <>
      <div id='content_navigate_arrow_footer_whole'>
        <div id='content_navigate_arrow_footer_wrapper'>
          <a href={leftLink}>
            <div id='content_navigate_arrow_footer_right_div'>
              <img className='footer_left_arrow_icon_design' src='/image/step1/part1/book/step1-part1-summary/footer_left_arrow_icon.png' />
              <div className='book-footer-text-vertical-center'>&nbsp;&nbsp;&nbsp;{ leftText }</div>
            </div>
          </a>
          <a href={ rightLink }>
            <div id='content_navigate_arrow_footer_right_div'>
              <div className='book-footer-text-vertical-center'>{ rightText }&nbsp;&nbsp;&nbsp;</div>
              <img className='footer_left_arrow_icon_design' src='/image/step1/part1/book/step1-part1-summary/footer_right_arrow_icon.png' />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}