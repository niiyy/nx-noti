import { NotificationT } from '../types'
import { isEnvBrowser } from '../utils/misc'
import Mock from './mockData'

if (isEnvBrowser()) {
  Mock.inject({
    data: {
      type: 'SUCCES',
      body: 'Succes notification',
      ms: 8000,
    },
    type: 'createNotification',
  })

  Mock.inject({
    data: {
      type: 'WARN',
      body: 'Warn notification',
      ms: 5000,
    },
    type: 'createNotification',
  })

  Mock.inject({
    data: {
      type: 'ERROR',
      body: 'Error notification',
      ms: 2000,
    },
    type: 'createNotification',
  })

  Mock.inject({
    data: {
      type: 'NORMAL',
      body: 'Normal notification',
      ms: 4000,
    },
    type: 'createNotification',
  })
}
