import React, {Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MemeIndex from './pages/MemeIndex'
import MemeEdit from './pages/MemeEdit'
import MemeNew from './pages/MemeNew'
import MemeShow from './pages/MemeShow'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import mockMemes from './mockMemes.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      memes: mockMemes
    }
  }
  render (){
    console.log(this.state.memes);
    return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/memeindex" component={MemeIndex} />
        <Route path="/memeshow" component={MemeShow} />
        <Route path="/memenew" component={MemeNew} />
        <Route path="/memeedit" component={MemeEdit} />
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </Router>
    )
  }
}

export default App