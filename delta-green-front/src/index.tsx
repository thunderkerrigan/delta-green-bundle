import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Main from './App/Main'
import reportWebVitals from './reportWebVitals'
import { StrictMode } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App/App'
import './Fonts/redacted/fonts.css'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Route  path='/' component={App}/>
      <Main />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
