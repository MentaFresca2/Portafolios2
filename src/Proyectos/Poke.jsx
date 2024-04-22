import PButton from "../Icons/PButton.jsx";
import React from "../Icons/React.jsx";
import Tailwind from "../Icons/Tailwind.jsx";
function JuegoC (){
    
    
    return(
        <section className="secpro" style={{marginTop:"20px",display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
            <div style={{ backgroundImage:"url('/Proyecto2.png')"}} className="imagen"></div>
            <div style={{ color:"white"}} className="textoimg">
                <p style={{margin:"0 0 0 0",fontSize:"200%",display:"flex",flexDirection:"column"}}> 
                    <strong>Pokedex funcional</strong>
                    <div style={{display:"flex",gap:"10px"}}>
                        <React/>
                        <Tailwind/>
                    </div>
                </p>
                <p>Recreacion de una pokedex. <br /> Es completamente funcional, pero no dice si es x2 o x4.</p>  
                <PButton link={"https://github.com/MentaFresca2/poketipes"}/>
                </div>

        </section>

    );}
export default JuegoC;