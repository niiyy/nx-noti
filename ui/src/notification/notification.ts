import { NotificationE, NotificationT, NotificationTypes } from '../types'
import { uuid } from '../utils/misc'

class _Notification {
  notifications: NotificationT[]
  notificationsColors: any
  constructor() {
    this.notifications = []
    this.notificationsColors = {
      '^0': 'white',
      '^1': 'black',
      '^2': 'red',
      '^3': 'orange',
      '^4': 'green',
      '^5': 'yellow',
      '^6': 'blue',
    }
  }

  setBodyColors(body: string) {
    body = body
      .replace(/\^0(\w+)/g, '<span style="color:white">$1')
      .replace(/\^1(\w+)/g, '<span style="color:black">$1')
      .replace(/\^2(\w+)/g, '<span style="color:red">$1')
      .replace(/\^3(\w+)/g, '<span style="color:orange">$1')
      .replace(/\^4(\w+)/g, "<span style='color:green'>$1")
      .replace(/\^5(\w+)/g, '<span style="color:yellow">$1')
      .replace(/\^6(\w+)/g, '<span style="color:blue">$1')
      .replace(/\^9(\w+)/g, '$1</span>')

    return body
  }

  notificationModel(notification: NotificationT): Node {
    const notificationRow = document.createElement('div')
    const logoContainer = document.createElement('div')
    const logoRow = document.createElement('div')
    const ionIcon = document.createElement('ion-icon')
    const bodyContainer = document.createElement('div')
    const body = document.createElement('p')

    notificationRow.id = notification.uuid as string
    notificationRow.className = `notification-row ${notification.type.toLowerCase()}-row-color`
    logoContainer.className = 'notification-logo-container'
    logoRow.className = `notification-logo-row ${notification.type.toLowerCase()}-logo-bgcolor`
    ionIcon.setAttribute('name', notification.icon as string)
    bodyContainer.className = 'notification-body-container'
    body.className = 'notification-value'

    notificationRow.appendChild(logoContainer)
    notificationRow.appendChild(bodyContainer)

    logoContainer.appendChild(logoRow)

    logoRow.appendChild(ionIcon)

    bodyContainer.appendChild(body)

    body.innerHTML = this.setBodyColors(notification.body)

    return notificationRow
  }

  removeNotification(id: string) {
    this.notifications = this.notifications.filter((noti) => noti.uuid !== id)
  }

  create(data: NotificationT) {
    const notificationOptions: NotificationT = {
      ms: data.ms ?? 5_000,
      type: data.type ?? 'NORMAL',
      body: data.body ?? 'no message.',
      // @ts-ignore
      icon: NotificationE[data.type ?? 'NORMAL'],
      uuid: uuid(),
    }
    console.log(notificationOptions.icon)
    this.notifications.push(notificationOptions)

    const notificationModel = this.notificationModel(notificationOptions)
    const root = document.getElementById('root') as HTMLDivElement

    if (root.firstChild) {
      root.insertBefore(notificationModel, root.firstChild)
    } else {
      root.appendChild(notificationModel)
    }

    setTimeout(() => {
      const notification = document.getElementById(
        notificationOptions.uuid as string
      ) as HTMLDivElement
      notification.style.animation = 'depop-notification 1.5s'
      setTimeout(() => {
        this.removeNotification(notification.id)
        notification?.remove()
      }, 1_500)
    }, notificationOptions.ms)
  }
}

const Notification = new _Notification()
export default Notification
