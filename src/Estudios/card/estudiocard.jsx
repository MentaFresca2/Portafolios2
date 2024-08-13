

function Estudio ({curso,children}) 
{
return(
<div style={{display:"flex",flexDirection:"column", width:"300px"}}>
<p style={{fontSize:"30px"}}><b>{curso}</b></p> 
<span>{children}</span>

</div>
);





}

export default Estudio;