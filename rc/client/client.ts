import { EventsE, NotificationT } from './types'
const DEBUG = true

if (DEBUG) {
  setTimeout(() => {
    setTimeout(() => {
      createNotification({
        type: 'WARN',
        body: 'Warning',
        ms: 2000,
      })
    }, 2000)

    createNotification({
      type: 'NORMAL',
      body: 'Normal',
      ms: 2000,
    })
    setTimeout(() => {
      createNotification({
        type: 'SUCCES',
        body: 'Succes',
        ms: 2000,
      })
    }, 4000)
    setTimeout(() => {
      createNotification({
        type: 'ERROR',
        body: 'Error',
        ms: 2000,
      })
    }, 6000)
  }, 2500)
}

const createNotification = (data: NotificationT) => {
  PlaySoundFrontend(-1, 'Click', 'DLC_HEIST_HACKING_SNAKE_SOUNDS', true)
  SendNuiMessage(
    JSON.stringify({
      data: {
        type: data.type,
        body: data.body,
        ms: data.ms,
      },
      type: 'createNotification',
    })
  )
}

onNet(EventsE.CREATE_NOTIFICATION, createNotification)
