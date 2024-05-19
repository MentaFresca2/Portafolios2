import Firebase from "../Icons/Firebase.jsx";
import React from "../Icons/React.jsx";
import { useState } from "react";
import PButton from "../Icons/PButton.jsx";

function Tabla (){
    const handleMouseOver = ()=> {document.getElementsByClassName("imagen")[0].style.borderColor = '#3e785d';}
    const handleMouseLeave = ()=> {document.getElementsByClassName("imagen")[0].style.borderColor = 'rgb(1, 14, 1)';}

    
    return(
        <section className="secpro" style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
            <div style={{ backgroundImage:"url('/Proyecto1.png')"}} className="imagen"></div>
            <div style={{ color:"white"}} className="textoimg">
                <span style={{margin:"0 0 0 0",fontSize:"200%",display:"flex",flexDirection:"column"}}> 
                    <strong>Tabla de Firebase</strong>
                    <div style={{display:"flex",gap:"10px"}}>
                    <React/>
                    <Firebase/> 
                    </div>
                </span>
                <p>Puedes añadir, eliminar y modificar elementos configurando tu propia base de datos.</p>  
                <PButton link={"https://github.com/MentaFresca2/FirebaseTable"}  onMouseOver = {handleMouseOver} onMouseLeave = {handleMouseLeave}/>
                </div>

        </section>

    );
}
export default Tabla;