import React, { Component } from 'react'
import error404 from '../assets/error-404.png'

class NotFound extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>Ooops, no cats here!</h3>
        <img src={error404} alt="error 404" className="error 404" />
      </div>
    )
  }
}
export default NotFound