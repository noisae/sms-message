import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import Tabs from './Tabs'

const props = {
  tabs: [(<div key='1'></div>)]
}

describe('Tabs Component', () => {

  describe('Renders one tab', () => {
    let component

    beforeEach(() => {
      component = shallow(<Tabs {...props} />)
    })

    it('tab list', () => {
      expect(component.find('.tabs__list').contains(props.tabs)).to.be.true
    })
  })
})
