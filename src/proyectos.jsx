import "./proyectos.css"
import "./Icons/Icons.css"
import Tabla from "./Proyectos/Tabla.jsx";
import JuegoC from "./Proyectos/JuegoC.jsx";

function Proyectos(){
return(
<>
<center>
    <div className="divproyecto">
        <span className="span333" style={{width:"100%",color:"white",fontSize:"250%"}}> <b>Proyectos</b> </span>
            <Tabla/>
            <JuegoC/>
        <div style={{height:"2000px"}}></div> {/*<==Temporal*/}
    </div>
</center>
</>










)}



export default Proyectos;