import "../Estudios.css"

function Estudio ({curso,children}) 
{
return(
<div className="flex" style={{display:"flex",flexDirection:"column", width:"230px"}}>
<p className="flex2" style={{fontSize:"30px"}}><b>{curso}</b></p> 
<span>{children}</span>

</div>
);





}

export default Estudio;