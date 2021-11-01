import React, { Component } from 'react'
// import { Button, Card, CardTitle, CardText } from 'reactstrap'
// import { NavLink } from 'react-router-dom'

class MemeShow extends Component {
  render() {
    // let {meme} = this.props
    return (
      <>
        <h3>I am the Meme Show</h3>
        {this.props.memes &&
        <>
          <p>{this.props.meme.name}</p>
          <p>{this.props.meme.description}</p>
          <p>{this.props.meme.url}</p>
      </>
      }
      </>
    )
  }
}
export default MemeShow