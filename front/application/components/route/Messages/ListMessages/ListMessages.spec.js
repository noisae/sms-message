import React from 'react'
import { expect } from 'chai'
import { mock } from 'sinon'
import { shallow } from 'enzyme'
import { Route } from 'react-router'
import ReactTable from 'rc-table'
import Loader from 'application/components/layout/Loader'
import MessageCollection from 'application/entities/MessageCollection'
import Message from 'application/entities/Message'

import ListMessages, { columns } from './ListMessages'

describe('ListMessages Component', () => {

  describe('Renders', () => {
    let component
    const props = {
      messageCollection: new MessageCollection(),
      loading: true
    }

    beforeEach(() => {
      component = shallow(<ListMessages {...props} />)
    })

    it('Loader', () => {
      expect(component).to.have.descendants(Loader)
    })
  })

  describe('Renders Content', () => {
    let component
    let messageMock
    let messagesObject = {}
    const props = {
      messageCollection: new MessageCollection({ messages: [ messageMock ] }),
      loading: false
    }

    beforeEach(() => {
      messageMock = mock(Message.prototype)
      messageMock.expects('toJSON').returns(messagesObject)

      component = shallow(<ListMessages {...props} />)
    })

    it('ReactTable', () => {
      expect(component).to.have.descendants(ReactTable)
      expect(component.find(ReactTable)).to.have.prop('columns', columns)
      expect(component.find(ReactTable)).to.have.prop('data').deep.equal([messagesObject])
      expect(component.find(ReactTable)).to.have.prop('className', 'list-messages__table')
    })

    afterEach(() => {
      messageMock.restore()
    })
  })
})
