import "./Estudios.css"
import Estudio from "./card/estudiocard.jsx"
export function Estudios ()

{
    return(
<div style={{width:"100%", display:"flex",justifyContent:"center"}}>

    <div className="EstudiosMain">
     
      <Estudio curso="ESO">
        Nuestra Señora de los Dolores <br /> (2018 - 2022)
      </Estudio>
      <Estudio curso="SMR">
        Ies Leonardo Da Vinci <br /> (2022-2024)
      </Estudio>
      <Estudio curso="Bootcamp web">
        Camara de Madrid <br /> (2024) 
      </Estudio>
      <div style={{height:"2000px"}}></div> {/*<==Temporal*/}
      
    </div>
</div>



    );

}