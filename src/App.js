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
import './App.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      memes: []
    }
  }

  componentDidMount(){
    this.readMeme()
  }

  readMeme = () => {
    fetch("http://localhost:3000/memes")
    .then(response => response.json())
    .then(memeArray => this.setState({memes: memeArray}))
    .catch(errors => (console.log(errors)))
  }

  createMeme = (newMeme) => {
    fetch("http://localhost:3000/memes", {
      body: JSON.stringify(newMeme),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readMeme())
    .catch(errors => (console.log(errors)))
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
          return <MemeShow meme={ meme } deleteMeme={this.deleteMeme} />
        }}/>
        <Route 
        path="/memenew" 
        render={(props) => <MemeNew createMeme={this.createMeme}/>}
        />
        <Route 
        path="/memeedit" 
        component={MemeEdit} />
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </Router>
    )
  }
}

export default App