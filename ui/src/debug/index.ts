import { NotificationT } from '../types'
import { isEnvBrowser } from '../utils/misc'
import Mock from './mockData'

if (isEnvBrowser()) {
  Mock.inject({
    data: {
      type: 'SUCCES',
      body: "Je suis un succes",
      ms: 8000,
    },
    type: 'createNotification',
  })

  setTimeout(() => {
    Mock.inject({
        data: {
          type: 'WARN',
          body: "Je suis un warn",
          ms: 5000,
        },
        type: 'createNotification',
      })
  }, 2000);

  setTimeout(() => {
    Mock.inject({
        data: {
          type: 'ERROR',
          body: "Je suis une erreur",
          ms: 2000,
        },
        type: 'createNotification',
      })
  }, 4000);

  setTimeout(() => {
    Mock.inject({
        data: {
          type: 'NORMAL',
          body: "Je suis une normal",
          ms: 4000,
        },
        type: 'createNotification',
      })
  }, 6000);

}
