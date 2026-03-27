// js/services/notification-service.js
// 🔔 Servicio de Notificaciones SYNAPSIS

import { AppConfig } from '../config/constants.js';

export class NotificationService {
    constructor() {
        this.notifications = [];
        this.container = null;
        this.createContainer();
    }

    createContainer() {
        // 🏗️ Crear contenedor de notificaciones si no existe
        this.container = document.getElementById('notifications-container');
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'notifications-container';
            this.container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                pointer-events: none;
            `;
            document.body.appendChild(this.container);
        }
    }

    show(message, type = 'info', duration = AppConfig.UI.NOTIFICATION_TIMEOUT_MS) {
        const notification = this.createNotification(message, type);
        this.container.appendChild(notification);
        
        // 🎭 Mostrar con animación
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // 🔄 Auto-ocultar
        setTimeout(() => {
            this.hide(notification);
        }, duration);
        
        return notification;
    }

    createNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icon = this.getIcon(type);
        const bgColor = this.getBgColor(type);
        
        notification.innerHTML = `
            <div class="flex items-center p-4 rounded-lg ${bgColor} border backdrop-blur-lg">
                <div class="flex-shrink-0 mr-3">
                    ${icon}
                </div>
                <div class="flex-1">
                    <p class="text-white font-medium">${message}</p>
                </div>
                <button class="ml-3 text-white hover:text-gray-200 transition-colors close-btn">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        `;
        
        // 🔘 Botón cerrar
        const closeBtn = notification.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => this.hide(notification));
        
        return notification;
    }

    hide(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    getIcon(type) {
        const icons = {
            success: `<svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>`,
            error: `<svg class="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>`,
            warning: `<svg class="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>`,
            info: `<svg class="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>`
        };
        return icons[type] || icons.info;
    }

    getBgColor(type) {
        const colors = {
            success: 'bg-green-500/90 border-green-500/30',
            error: 'bg-red-500/90 border-red-500/30',
            warning: 'bg-yellow-500/90 border-yellow-500/30',
            info: 'bg-blue-500/90 border-blue-500/30'
        };
        return colors[type] || colors.info;
    }

    // 🧹 Limpiar todas las notificaciones
    clear() {
        const notifications = this.container.querySelectorAll('.notification');
        notifications.forEach(notification => this.hide(notification));
    }
}

