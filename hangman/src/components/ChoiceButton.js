import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './ChoiceButton.css'

export default class ChoiceButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="App">
      <button className="ChoiceButton" onClick={this.props.onClick}>Make Choice</button>
      </div>
    )
  }
}
