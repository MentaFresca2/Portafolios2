import Firebase from "../Icons/Firebase.jsx";
import React from "../Icons/React.jsx";
import PButton from "../Icons/PButton.jsx";

function Tabla (){
    
    
    
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
                <p>Puedes añadir, eliminar y modificar elementos, así como sumar o restar cantidades configurando tu propia base de datos.</p>  
                <PButton link={"https://github.com/MentaFresca2/FirebaseTable"}/>
                </div>

        </section>

    );
}
export default Tabla;