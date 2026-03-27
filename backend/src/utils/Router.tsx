// src/utils/Router.tsx - Router híbrido que usa nuestros componentes JS
import React, { useEffect, useRef } from 'react'

interface RouterProps {
  currentView: string
}

export const Router: React.FC<RouterProps> = ({ currentView }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      renderView(currentView, containerRef.current)
    }
  }, [currentView])

  const renderView = async (view: string, container: HTMLElement) => {
    // Limpiar contenido anterior
    container.innerHTML = ''

    try {
      switch (view) {
        case 'home':
          const { HomeView } = await import('../../js/components/home/home-view.js')
          const homeView = new HomeView()
          container.innerHTML = homeView.render()
          homeView.attachEvents(container)
          break

        case 'search':
          const { SearchView } = await import('../../js/components/search/search-view.js')
          const searchView = new SearchView()
          container.innerHTML = searchView.render()
          searchView.attachEvents(container)
          break

        case 'library':
          const { LibraryView } = await import('../../js/components/library/library-view.js')
          const libraryView = new LibraryView()
          container.innerHTML = libraryView.render()
          libraryView.attachEvents(container)
          break

        case 'beings':
          const { BeingsView } = await import('../../js/components/beings/beings-view.js')
          const beingsView = new BeingsView()
          container.innerHTML = beingsView.render()
          beingsView.attachEvents(container)
          break

        case 'chat':
          const { ChatView } = await import('../../js/components/chat/chat-view.js')
          const chatView = new ChatView()
          container.innerHTML = chatView.render()
          chatView.attachEvents(container)
          break

        default:
          container.innerHTML = '<div class="error-view">Vista no encontrada</div>'
      }
    } catch (error) {
      console.error(`Error cargando vista ${view}:`, error)
      container.innerHTML = '<div class="error-view">Error cargando vista</div>'
    }
  }

  return <div ref={containerRef} className="view-container" />
}