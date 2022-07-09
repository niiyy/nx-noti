export type NotificationTypes = 'SUCCES' | 'WARN' | 'NORMAL' | 'ERROR'

export enum NotificationE {
  SUCCES = 'checkmark-circle-outline',
  WARN = 'alert-circle-outline',
  NORMAL = 'alert-outline',
  ERROR = 'warning-outline',
}

export interface NotificationT {
  type: NotificationTypes
  ms: number
  body: string
  uuid?: string
  icon?: string
}

export enum EventsE {
  CREATE_NOIFICATION = 'createNotification',
}
