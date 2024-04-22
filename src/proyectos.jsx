import "./proyectos.css"
import "./Icons/Icons.css"
import Tabla from "./Proyectos/Tabla.jsx";
import JuegoC from "./Proyectos/Poke.jsx";
import Codeico from "./Icons/Codeico.jsx"
function Proyectos(){
return(
<>
<center>
    <div className="divproyecto">
        <span className="span333" style={{width:"100%",color:"white",fontSize:"250%", display:"flex",gap:"20px"}}> <Codeico/> <b>Proyectos</b> </span>
            <Tabla/>
            <JuegoC/>
        <div style={{height:"2000px"}}></div> {/*<==Temporal*/}
    </div>
</center>
</>










)}



export default Proyectos;