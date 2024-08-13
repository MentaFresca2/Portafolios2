import React from 'react'
import ReactDOM from 'react-dom/client'
import Presentacion from './Presentacion.jsx'
import './icono.css'
import './index.css'
import Animacion from "./animacion.jsx"
import Proyectos from "./proyectos.jsx"
import { Estudios } from './Estudios/Estudios.jsx'

ReactDOM.createRoot(document.getElementById('root')).render( //esta cosa crea un fokin div con id root que epico xd
  <React.StrictMode>  
  
   <div className='bg'>
    <Presentacion />
    <Animacion/>
    <Estudios/>
    <Proyectos/>

    </div>
  </React.StrictMode>
)
