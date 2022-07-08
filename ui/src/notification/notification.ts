import { NotificationE, NotificationT, NotificationTypes } from '../types'
import { uuid } from '../utils/misc'

class _Notification {
  notifications: NotificationT[]
  constructor() {
    this.notifications = []
  }

  notificationModel(notification: NotificationT): Node {


    const notificationRow = document.createElement('div')
    const logoContainer = document.createElement('div')
    const logoRow = document.createElement('div')
    const ionIcon = document.createElement('ion-icon')
    const bodyContainer = document.createElement('div')
    const body = document.createElement('p')

    notificationRow.id = (notification.uuid as string)
    notificationRow.className = `notification-row ${notification.type.toLowerCase()}-row-color`
    logoContainer.className = 'notification-logo-container'
    logoRow.className = `notification-logo-row ${notification.type.toLowerCase()}-logo-bgcolor`
    ionIcon.setAttribute('name', (notification.icon as string))
    bodyContainer.className = 'notification-body-container'
    body.className = 'notification-value'

    notificationRow.appendChild(logoContainer)
    notificationRow.appendChild(bodyContainer)

    logoContainer.appendChild(logoRow)

    logoRow.appendChild(ionIcon)

    bodyContainer.appendChild(body)

    body.innerHTML = notification.body

    return notificationRow
  }

  create(data: NotificationT) {
    const notificationOptions: NotificationT = {
      ms: data.ms ?? 5_000,
      type: data.type ?? 'NORMAL',
      body: data.body ?? 'no message.',
      // @ts-ignore
      icon: NotificationE[(data.type)],
      uuid: uuid(),
    }

    this.notifications.push(notificationOptions)

    const notificationModel = this.notificationModel(notificationOptions)
    const root = document.getElementById('root') as HTMLDivElement

    if (root.firstChild) {
        root.insertBefore(notificationModel, root.firstChild);
    } else {
        root.appendChild(notificationModel);
    }

    setTimeout(() => {
        const notification = document.getElementById((notificationOptions.uuid as string)) as HTMLDivElement
        notification.style.animation = 'depop-notification 1.5s'
        setTimeout(() => {
            notification?.remove()
        }, 1_500);
    }, notificationOptions.ms);
  }
}

const Notification = new _Notification()
export default Notification
