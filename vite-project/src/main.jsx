import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import Chai from './chai'

function MyApp(){
  return (
    <div>
      <h1> Custom APP !! </h1>
    </div>
  )
}
const anotherElement = (
  <a href='https://www.google.com' target='_blank'>
    Click me to visit google</a>
)
const reactElement = React.createElement
(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visit google'
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />
    <Chai />
    {reactElement}
    <br></br>
    {anotherElement}
  
  </StrictMode>
)
