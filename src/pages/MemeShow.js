import React, { Component } from 'react'
import { Button, Card, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class MemeShow extends Component {
  render() {
    let {meme} =this.props 
    return (
      <div className = "page-body">
        {meme &&
          <Card body className="page-body">
            <CardTitle tag = "h4">{meme.name}</CardTitle>
            
            <img src={meme.url} />
            <CardText>{meme.description}</CardText>
            <NavLink to={`/memeedit/${meme.id}`}>
                <Button>Edit Meme</Button>
            </NavLink>
            <br />
          </Card>

          }

        </div>
    )
  }
}
export default MemeShow