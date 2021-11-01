import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MemeNew from './MemeNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When MemeNew renders", () => {
  it("displays a heading", () => {
    const memeNew = shallow(<MemeNew />)
    const newheading = memeNew.find("h3")
    expect(newheading.text()).toEqual("Add a New Meme")
  })
  it("displays a form", () => {
    const memeNew = shallow(<MemeNew />)
    const formGroup = memeNew.find("FormGroup")
    expect(formGroup.length).toEqual(3)
    const label = memeNew.find("Label")
    expect(label.length).toEqual(3)
    const input = memeNew.find("Input")
    expect(input.length).toEqual(3)
  })
})