import "./proyectos.css"
import Firebase from "./Icons/Firebase.jsx";
import React from "./Icons/React.jsx";
import PButton from "./Icons/PButton.jsx";
function Proyectos(){
return(
<center>
<div style={{display:"flex",marginTop:"20px",flexDirection:"column",width:"100vw",height:"auto",justifyContent:"center"}}>
    <section style={{}} className="separador">
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










</div>
</center>

)}



export default Proyectos;