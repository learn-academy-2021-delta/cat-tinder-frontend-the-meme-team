import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import memeHub from '../assets/memehub.png'


class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/">
          <img src={memeHub} alt="meme hub logo" className="memehub"/>
        </NavLink>
        <div className="nav-links">
          <ul>
            <NavLink to="/memeindex">Meet the Memes</NavLink>
          </ul>
          <ul>
            <NavLink to="/memenew">Add a Meme</NavLink>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header