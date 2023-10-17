import { registerMicroApps, start } from 'qiankun'
import React from "react"
import ReactDOM from 'react-dom/client'
import App from './app.tsx'


registerMicroApps([{
  name: 'vue app1',
  entry: '//localhost:8081',
  container: '#baseapp',
  activeRule: '/app1',
  props: {
    path: '/app1'
  }
}])

start()

const root = ReactDOM.createRoot(document.querySelector('#baseapp') as Element)

root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)