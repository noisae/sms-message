import Pusher from 'pusher-js'

export const EVENT = {
  type: 'REALTIME',
  name: 'SMS_RECEIVE'
}

export default function realTime({ store }) {
  const handler = data => store.dispatch({
    ...EVENT,
    data
  })

  const realTime = new Pusher('1c59fb8b0c2d388e4227', {
    cluster: 'us2',
    encrypted: true
  })

  const channel = realTime.subscribe('sms-receive')
  channel.bind(EVENT.name, handler)

  return channel
}
