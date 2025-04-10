import {lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout'
import Contacto from './views/Contacto'
import MencionesCondiciones from './components/MecionesCondiciones'
const IndexPage = lazy(() =>import('./views/IndexPage'))
const Caracteristicas = lazy(() =>import('./views/Caracteristicas'))
const PlanesSuscripcion = lazy(() =>import('./views/PlanesSuscripcion'))

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route  element={<Layout/>} >
                <Route path='/' element={
                  <Suspense fallback= "Cargando...">
                    <IndexPage/>
                  </Suspense>
                } index/>
                <Route path='/caracteristicas' element={
                  <Suspense fallback= "Cargando...">
                    <Caracteristicas/> 
                  </Suspense>
                }/>

                <Route path='/suscripcion' element={
                  <Suspense fallback= "Cargando...">
                    <PlanesSuscripcion/> 
                  </Suspense>
                }/>

                <Route path='/contactanos' element={
                  <Suspense fallback= "Cargando...">
                    <Contacto/> 
                  </Suspense>
                }/>
                <Route path='/legales' element={
                  <Suspense fallback= "Cargando...">
                    <MencionesCondiciones/> 
                  </Suspense>
                }/>
                
                
              </Route>
            
        </Routes>    
    </BrowserRouter>
  )
}
