import React from 'react'
import { FadeIn } from 'animate-components'

export default class ChangeAvatar extends React.Component {

  render(){
    let { preview_img, change_avatar, back } = this.props

    return (
      <div class='change_avatar modal' >
        <FadeIn duration='300ms' >
          <div className='c_a_header modal_header'>
            <span className='title' >Change Avatar</span>
          </div>
          <div className='c_a_middle' >
            <img src={preview_img} />
          </div>
          <div className='c_a_bottom modal_bottom'>
            <a href='#' className='c_a_cancel sec_btn' onClick={back} >Cancel</a>
            <a href='#' className='c_a_add pri_btn' onClick={change_avatar} >Change avatar</a>
          </div>
        </FadeIn>
      </div>
    )
  }
}
