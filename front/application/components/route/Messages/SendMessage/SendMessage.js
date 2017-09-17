import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'
import ReactTable from 'rc-table'
import Message from 'application/entities/Message'

import './SendMessage.less'

const bem = bemClassName.bind(null, 'send-message')

class SendMessage extends React.Component {

  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    loading: PropTypes.bool
  }

  constructor(props) {
    super(props)

    this.clearFields()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearFields() {
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
  }

  handleSubmit(event) {
    const { sendMessage } = this.props
    event.preventDefault()

    const haveError = this.fieldList.find((field) => this.validateField(field, this.state.fields[field].value))
    if(!haveError) {
      sendMessage(new Message({
        recipient: this.state.fields.to.value,
        originator: this.state.fields.from.value,
        body: this.state.fields.message.value
      }))
      this.clearFields()
      this.setState({ fields: this.state.fields, sended: true })
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

    this.setState({ fields, sended: false })
    return fields[fieldName].error
  }

  render() {
    const { from, to, message } = this.state.fields
    const { sended } = this.state

    let successMessage
    if (sended) {
      successMessage = (<div className={bem('success')}>Sended!</div>)
    }

    return (
      <form className={bem('form')} onSubmit={this.handleSubmit}>
        <div className={bem('fields')}>
          <input value={from.value} name='from' className={bem('field', { error: from.error })} type="text" placeholder="Originator" onChange={this.handleChange.bind(this)} />
          <input value={to.value} name='to' className={bem('field', { error: to.error })} type="text" placeholder="Recipient" onChange={this.handleChange.bind(this)}  />
        </div>
        <textarea value={message.value} name='message' className={bem('field', { error: message.error })} type="text" placeholder="Message" onChange={this.handleChange.bind(this)}></textarea>
        <div className={bem('fields')}>
          <input className={bem('submit')} type="submit" value="Send" />
          {successMessage}
        </div>
      </form>
    )
  }
}

export default SendMessage
