import { isEnvBrowser } from '../utils/misc'

interface EventT {
  data: any
  type: string
}

class _Mock {
  DEBUG_TIMER: number
  constructor() {
    this.DEBUG_TIMER = 500
  }

  inject(event: EventT) {
    if (isEnvBrowser()) {
      setTimeout(() => {
        window.dispatchEvent(
          new MessageEvent('message', {
            data: {
              data: event.data,
              type: event.type,
            },
          })
        )
      }, this.DEBUG_TIMER)
    }
  }
}
const Mock = new _Mock()
export default Mock
