import React, { Component } from 'react'

class MemeIndex extends Component {
  render() {
    return (
      <>
        <h3>I am the Meme Index</h3>
        {this.props.memes && this.props.memes.map(meme => {
          return (
          <p key={meme.id}> 
          <NavLink to={`/memeshow/${meme.id}`}>
          {meme.name} 
          </NavLink>
          </p>
          )
        })}
      </>
    )
  }
}
export default MemeIndex