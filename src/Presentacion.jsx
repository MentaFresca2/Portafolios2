import './Presentacion.css';
import "./icono.css"
import Icono from "./icono.jsx"
function Presentacion() {

  return (
  <div className='uno'>
    <div className='body'>

      <div className='head'>
        <span className='texto2'>¡Buenas! <span className='nombre'> Soy Rubén </span> </span> <span className='texto3'>Rubén Gutiérrez Ramírez</span>
      
      </div>
      <div className='divperfil'>
        <span className='texto'>
          Soy un <strong>entusiasta del desarrollo web </strong> con practica en <b>HTML</b>, <b>CSS</b> y <b>JavaScript</b> con <b>React</b>. 
          ESTO EN EL SOBRE MI :Aunque no tengo experiencia laboral formal,  estoy emocionado por aplicar mis habilidades y aprender en un entorno profesional. 
          Busco oportunidades para crecer y contribuir con mi pasión por la programación al mundo laboral.
        </span>
        <div style={{display: "flex", flexDirection:"row"}}>
        <div style={{display: "flex", flexDirection:"column", justifyContent:"center",height:"250px"}}>
          <img className='perfilimg' src="/img1.png" alt="fotoDePerfil" />
          <Icono/>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Presentacion;
