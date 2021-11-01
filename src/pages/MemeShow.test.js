import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MemeShow from './MemeShow'

Enzyme.configure({ adapter: new Adapter() })

describe("When MemeShow renders", () => {
  it("displays a heading", () => {
    const memeShow = shallow(<MemeShow />)
    const showHeading = memeShow.find("h3")
    expect(showHeading.text()).toEqual("I am the Meme Show")
  })
})