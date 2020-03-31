import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterView from './routerView'
import routerConfig from './routerConfig'


const router: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterView routers={routerConfig.routers}></RouterView>
    </BrowserRouter>
  )
}

export default router
