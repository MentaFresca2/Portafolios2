import "./proyectos.css"
import "./Icons/Icons.css"
import Card from "./Proyectos/Card.jsx"
import Codeico from "./Icons/Codeico.jsx"
import {Tailwind, React, Firebase,Cpp} from "./Icons/Index.jsx"
function Proyectos(){
    




return(
<>
<center>
    <div className="divproyecto">
        <span className="span333" style={{width:"100%",color:"white",fontSize:"250%", display:"flex",gap:"20px"}}> <Codeico/> <b>Proyectos</b> </span>
            <Card img="/Proyecto2.png" url="https://github.com/MentaFresca2/poketipes" title="Pokedex" >
                <div style={{display:"flex",gap:"10px",fontSize:"200%"}}>
                    <React/>
                    <Tailwind/>
                </div>
                <p>Recreacion de una pokedex. <br /> Es completamente funcional <br /> aunque no dice si es x2 o x4.</p>
            </Card>
            <Card img="/Proyecto1.png" url="https://github.com/MentaFresca2/FirebaseTable" title="FirebaseTable">
                <div style={{display:"flex",gap:"10px",fontSize:"200%"}}>
                    <React/>
                    <Firebase/>         
                </div>
                <p>Puedes añadir, eliminar y modificar elementos configurando tu propia base de datos.</p> 
            </Card>
            <Card img="/Proyecto3.png" url="https://github.com/MentaFresca2/Motor" title="Motor grafico">
                <div style={{display:"flex",gap:"10px",fontSize:"200%"}}>
                    <Cpp/>        
                </div>
                <p>Por ahora solo muestra un cubo con luz y otro con una textura. Estoy trabajando en eyo. </p> 
            </Card>
        
    </div>
<div style={{height:"1000px"}}></div>
</center>
</>










)}



export default Proyectos;