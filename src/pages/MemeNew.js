import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {Redirect} from 'react-router-dom'

class MemeNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        url: "",
        description: ""
      },
      submitted: false
    }
    
  }

  handleChange = (e) => {
    let {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.createMeme(this.state.form)
    this.setState({submitted: true})
  }

  render() {
    return (
      <div className="page-body">
        <h3>Add a New Meme</h3>
        <Form>
          <FormGroup>
            <Label for="name">
              Meme Name
            </Label>
            <Input
              name="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="url">
              Meme URL
            </Label>
            <Input
              name="url"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.url}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">
              Meme's Description
            </Label>
            <Input
              name="description"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.description}
            />
          </FormGroup>
          <Button
            onClick={this.handleSubmit}
            name="submit"
          >
            Add a New Meme
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/memeindex"/>}
      </div>
    )
  }
}
export default MemeNew