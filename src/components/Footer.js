import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <footer>
        <ul>
          <NavLink to="/">&copy; The Meme Team</NavLink>
        </ul>
        <ul>
          <NavLink to="/memeindex">Meet the Memes</NavLink>
        </ul>
        <ul>
          <NavLink to="/memenew">Add a Meme</NavLink>
        </ul>
      </footer>
    )
  }
}
export default Footer