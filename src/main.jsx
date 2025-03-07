import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import "./locales/i18next.js";
import { BrowserRouter } from 'react-router-dom'
import StateProvider from './context/provider/StateProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StateProvider>
      <App />
    </StateProvider>
  </BrowserRouter>,
)
