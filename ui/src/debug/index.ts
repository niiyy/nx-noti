import { NotificationT } from '../types'
import { isEnvBrowser } from '../utils/misc'
import Mock from './mockData'

if (isEnvBrowser()) {
  Mock.inject({
    data: {
      type: 'SUCCES',
      body: 'Succes notification',
      ms: 1000000,
    },
    type: 'createNotification',
  })

  Mock.inject({
    data: {
      type: 'WARN',
      body: 'Warn notification',
      ms: 1000000,
    },
    type: 'createNotification',
  })

  Mock.inject({
    data: {
      type: 'ERROR',
      body: 'Error notification teste ^6this is on ^9bleu ^2and this on ^9red ^4and this on green',
      ms: 1000000,
    },
    type: 'createNotification',
  })

  Mock.inject({
    data: {
      type: 'ERROR',
      body: 'Error notification',
      ms: 1000000,
    },
    type: 'createNotification',
  })
}
