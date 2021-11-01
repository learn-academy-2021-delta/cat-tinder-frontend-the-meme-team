import React, { Component } from 'react'

class MemeShow extends Component {
  render() {
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