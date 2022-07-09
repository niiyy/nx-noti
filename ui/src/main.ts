import './scss/index.css'
import './debug/index'
import { EventsE } from './types'
import Notification from './notification/notification'

window.addEventListener('message', (event) => {
  if (event.data.type === EventsE.CREATE_NOIFICATION) {
    Notification.create(event.data.data)
  }
})
