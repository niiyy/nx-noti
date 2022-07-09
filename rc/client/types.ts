export type NotificationTypes = 'SUCCES' | 'WARN' | 'NORMAL' | 'ERROR'

export enum EventsE {
  CREATE_NOTIFICATION = 'NA::createNotification',
}

export interface NotificationT {
  type: NotificationTypes
  ms: number
  body: string
}
