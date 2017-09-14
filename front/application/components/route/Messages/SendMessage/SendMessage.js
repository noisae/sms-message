import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import ReactTable from 'rc-table'
import Message from 'application/entities/Message'

import './SendMessage.less'

const bem = bemClassName.bind(null, 'send-message')

class SendMessage extends React.Component {

  constructor(props) {
    super(props)

    const defaultField = {
      value: '',
      error: false
    }

    this.state = {
      fields: {}
    }

    this.fieldList = ['from', 'to', 'message']
    this.state.fields = this.fieldList.reduce((lastValue, field) => {
      lastValue[field] = Object.assign({}, defaultField)
      return lastValue
    }, {})

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { sendMessage } = this.props
    event.preventDefault()

    const haveError = this.fieldList.find((field) => this.validateField(field, this.state.fields[field].value))
    if(!haveError) {
      sendMessage(new Message({
        id: 0,
        recipient: this.state.fields.to,
        originator: this.state.fields.from,
        body: this.state.fields.message,
        created: new Date(),
        sended: null
      }))
    }
  }

  handleChange(event) {
    const fieldName = event.target.name
    const fieldValue = event.target.value

    return this.validateField(fieldName, fieldValue)
  }

  validateField(fieldName, fieldValue) {
    const { fields } = this.state

    fields[fieldName].value = fieldValue
    fields[fieldName].error = false
    if(fieldValue.length <= 0) {
      fields[fieldName].error = true;
    }

    this.setState({ fields })
    return fields[fieldName].error
  }

  render() {
    const { from, to, message } = this.state.fields
    return (
      <form className={bem('form')} onSubmit={this.handleSubmit}>
        <div className={bem('fields')}>
          <input name='from' className={bem('field', { error: from.error })} type="text" placeholder="Originator" onChange={this.handleChange.bind(this)} />
          <input name='to' className={bem('field', { error: to.error })} type="text" placeholder="Recipient" onChange={this.handleChange.bind(this)}  />
        </div>
        <textarea name='message' className={bem('field', { error: message.error })} type="text" placeholder="Message" onChange={this.handleChange.bind(this)}></textarea>
      <input className={bem('submit')} type="submit" value="Send" />
    </form>
    )
  }
}

SendMessage.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

export default SendMessage
