import '#index.css'
import * as React from 'react'
import { App } from '#app.tsx'
import { createRoot } from 'react-dom/client'

const rootElement = document.querySelector('div#root')

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
