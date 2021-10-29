import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MemeIndex from './pages/MemeIndex';
import Home from './pages/Home';

Enzyme.configure( { adapter: new Adapter() })

describe('When the app renders', ()=> {
  it('displays a header and footer', ()=> 
  {
    const renderedApp = shallow(<App/>)

    const renderedHeader  = renderedApp.find
    ("Header")

    const renderedFooter = renderedApp.find
    ("Footer")

    expect(renderedHeader.length).toEqual(1)

    expect(renderedFooter.length).toEqual(1)

  })
  it('provides a route "/" to the home component', () =>{

      const renderedApp = shallow(<App/>)

      const renderedHomeRoute = renderedApp.find('[path="/"]')

      expect(renderedHomeRoute.props()
      .component).toEqual(Home)
  })

  it('provides a route "/memeindex" to the MemeIndex component', ()=>{

    const renderedApp = shallow(<App/>)

    const renderedMemeIndexRoute = 
    renderedApp.find('[path="/memeindex"]')

    expect(renderedMemeIndexRoute.props().component)
    .toEqual(MemeIndex)

  })
})

