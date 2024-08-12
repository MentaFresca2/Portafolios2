import './Presentacion.css';
import "./icono.css"
import Icono from "./icono.jsx"
function Presentacion() {

  return (
  <div className='uno'>
    <div className='body'>

 
      <div className='divperfil'>
      <div className='head'>
        
      
      
        <span className='texto2'>¡Buenas!  <span className='nombre'> Soy Rubén </span> </span> <br />
        <span className='texto' style={{textAlign:'justify'}}>
        
          Soy un <b className='color'>entusiasta del desarrollo web </b> con practica en <b className='color'>creacion de paginas web</b> y <b className='color'>C++</b> con <b className='color'>React</b> y aunque no tengo experiencia laboral,  estoy altamente emocionado por aplicar mis habilidades y aprender en un entorno profesional. 
          
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
