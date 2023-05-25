import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import App from './assets/Components/App.jsx'
import Style from './assets/Style/index.css'


const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <App />    
  </BrowserRouter> 
)
