import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button, CardTitle, Row, Col } from 'reactstrap'

class MemeIndex extends Component {
  render() {
    const {memes} = this.props
    return (
      <div className="page-body">
        <h3>Meet the Memes</h3>
        <div className="index-cards">
        {/* {this.props.memes && this.props.memes.map(meme => { */}
        {memes && memes.map(meme => {
          return (
            <Row key={meme.id}> 
            <Col sm="6">
            <Card body>
              <CardTitle tag="h4">{meme.name}</CardTitle>
            <NavLink to={`/memeshow/${meme.id}`}><Button>Meet Your Meme</Button></NavLink>
            </Card>
            </Col>
            </Row>
            )

        })}
        </div>  
        </div>
    )
  }
}
export default MemeIndex