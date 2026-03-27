// src/services/UserService.ts - Servicio React que conecta con nuestro JS
export class UserService {
  private static instance: UserService
  
  static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService()
    }
    return UserService.instance
  }

  async loginUser(credentials: any) {
    // Usar nuestro servicio JS existente
    const { userService } = await import('../../js/services/user-service.js')
    return userService.login(credentials)
  }

  async getCurrentUser() {
    const { userService } = await import('../../js/services/user-service.js')
    return userService.getCurrentUser()
  }
}