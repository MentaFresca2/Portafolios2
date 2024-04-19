import "./proyectos.css"
import Firebase from "./Icons/Firebase.jsx";
import React from "./Icons/React.jsx";
import PButton from "./Icons/PButton.jsx";
import "./Icons/Icons.css"
function Proyectos(){
return(
<>
<center>
    <div className="divproyecto">
        <span className="span333" style={{width:"100%",color:"white",fontSize:"250%"}}> <b>Proyectos</b> </span>
        <section className="secpro" style={{marginTop:"20px",display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
            <div style={{}} className="imagen"></div>
            <div style={{ color:"white"}} className="textoimg">
                <p style={{margin:"0 0 0 0",fontSize:"200%",display:"flex",flexDirection:"column"}}> 
                    <strong>Tabla de Firebase</strong>
                    <div style={{display:"flex",gap:"10px"}}>
                    <Firebase/> 
                    <React/>
                    </div>
                </p>
                <p>Puedes añadir, eliminar y modificar elementos, así como sumar o restar cantidades configurando tu propia base de datos.</p>  
                <PButton/>
                </div>

        </section>
        <div style={{height:"2000px"}}></div> {/*<==Temporal*/}
    </div>
</center>
</>










)}



export default Proyectos;