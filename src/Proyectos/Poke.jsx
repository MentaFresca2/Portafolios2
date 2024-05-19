import PButton from "../Icons/PButton.jsx";
import React from "../Icons/React.jsx";
import { useEffect, useState } from "react";
import Tailwind from "../Icons/Tailwind.jsx";
function JuegoC (){
    const handleMouseOver = ()=> {document.getElementsByClassName("imagen")[1].style.borderColor = '#3e785d';}
    const handleMouseLeave = ()=> {document.getElementsByClassName("imagen")[1].style.borderColor = 'rgb(1, 14, 1)';}




    
    return(
        <section className="secpro" style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
            <div style={{ backgroundImage:"url('/Proyecto2.png')"}} className="imagen"></div>
            <div style={{ color:"white"}} className="textoimg">
                <span style={{margin:"0 0 0 0",fontSize:"200%",display:"flex",flexDirection:"column"}}> 
                    <strong>Pokedex funcional</strong>
                    <div style={{display:"flex",gap:"10px"}}>
                        <React/>
                        <Tailwind/>
                    </div>
                </span>
                <p>Recreacion de una pokedex. <br /> Es completamente funcional, pero no dice si es x2 o x4.</p>  
                <PButton link={"https://github.com/MentaFresca2/poketipes"}  onMouseOver = {handleMouseOver} onMouseLeave = {handleMouseLeave}/>
                </div>

        </section>

    );}
export default JuegoC;