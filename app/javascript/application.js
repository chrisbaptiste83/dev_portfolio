// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

// React + Inertia setup
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import React from 'react'

// Import pages
import Home from './pages/Home'

const pages = {
  'Home': Home,
}

createInertiaApp({
  resolve: name => {
    const page = pages[name]
    if (!page) {
      throw new Error(`Page not found: ${name}`)
    }
    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
