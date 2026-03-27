// src/services/NotificationService.ts - Sistema de notificaciones React
export class NotificationService {
  private static callbacks: ((notification: any) => void)[] = []

  static subscribe(callback: (notification: any) => void) {
    this.callbacks.push(callback)
  }

  static notify(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const notification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date()
    }

    this.callbacks.forEach(callback => callback(notification))
  }
}