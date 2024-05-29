import "./proyectos.css"
import "./Icons/Icons.css"
import Card from "./Proyectos/Card.jsx"
import Codeico from "./Icons/Codeico.jsx"
import {Tailwind, React, Firebase} from "./Icons/Index.jsx"
function Proyectos(){
    




return(
<>
<center>
    <div className="divproyecto">
        <span className="span333" style={{width:"100%",color:"white",fontSize:"250%", display:"flex",gap:"20px"}}> <Codeico/> <b>Proyectos</b> </span>
            <Card img="/Proyecto2.png" url="https://github.com/MentaFresca2/poketipes" >
                <div style={{display:"flex",gap:"10px",fontSize:"200%"}}>
                    <React/>
                    <Tailwind/>
                </div>
                <p>Recreacion de una pokedex. <br /> Es completamente funcional, pero no dice si es x2 o x4.</p>
            </Card>
            <Card img="/Proyecto1.png" url="https://github.com/MentaFresca2/FirebaseTable"ico0={<React/>} ico1 = {<Firebase/>}>
                <div style={{display:"flex",gap:"10px",fontSize:"200%"}}>
                    <React/>
                    <Firebase/>         
                </div>
                <p>Puedes añadir, eliminar y modificar elementos configurando tu propia base de datos.</p> 
            </Card>
        <div style={{height:"2000px"}}></div> {/*<==Temporal*/}
    </div>
</center>
</>










)}



export default Proyectos;