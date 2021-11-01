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

import memes from './mockMemes.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      memes: memes
    }
  }
  render (){
    console.log(this.state.memes);
    return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route 
          path="/memeindex" 
          render={(props) => 
          <MemeIndex memes={this.state.memes}/>} 
        />
        <Route 
        path="/memeshow/:id" 
        render={(props) => {
          let id = props.match.params.id
          let meme = this.state.memes.find(m => m.id === +id)
          return <MemeShow meme={ meme } />
        }}/>
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