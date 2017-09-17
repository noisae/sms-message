import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Dashboard from './Dashboard'

const props = {
  title: 'Dashboard Title',
  tabs: (<div>tabs</div>)
}

const children = (<div>children</div>)

describe('Dashboard Component', () => {

  describe('Renders', () => {
    let component

    beforeEach(() => {
      component = shallow(<Dashboard {...props}>{children}</Dashboard>)
    })

    it('title', () => {
      expect(component.find('.dashboard__title')).to.have.text(props.title)
    })

    it('tabs', () => {
      expect(component.find('.dashboard__tabs')).to.have.text('tabs')
    })

    it('children', () => {
      expect(component.find('.dashboard__content')).to.have.text('children')
    })
  })
})
