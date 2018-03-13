import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import img0 from '../images/img0.jpg'
import './Hangman.css'

export default class Hangman extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="Hangman">
      <img src={img0} alt="hanging"/>
      </div>
    )
  }
}
