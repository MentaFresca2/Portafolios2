import './Presentacion.css';
import "./icono.css"
import Icono from "./icono.jsx"
function Presentacion() {

  return (
  <div className='uno'>
    <div className='body'>

 
      <div className='divperfil'>
      <div className='head'>
        
      
      
        <span className='texto2'>¡Buenas!  <span className='nombre'> Soy Rubén<span style={{fontSize:"medium",opacity:"0.6"}}>(19<span style={{fontSize:"small",opacity:"0.8"}}>años</span>)</span></span> </span> <br />
        <span className='texto' style={{textAlign:'justify'}}>
        
          Soy un <b className='color'>entusiasta del desarrollo web </b> con practica en <b className='color'>creacion de paginas web</b> con <b className='color'>React</b> y <b className='color'>C++</b> .Aun no tengo experiencia laboral formal, pero estoy emocionado por aplicar mis habilidades y aprender en un entorno profesional. 
          
        </span>
        </div>
        <div className='imgpre' style={{display: "flex", flexDirection:"column", justifyContent:"center",height:"250px",alignItems:"center"}}>
          <img className='perfilimg' src="img1.webp" alt="fotoDePerfil" />
          <Icono/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Presentacion;
