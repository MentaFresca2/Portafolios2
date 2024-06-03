

function Estudio ({curso,children}) 
{
return(
<div style={{display:"flex",flexDirection:"row", width:"400px"}}>
<p style={{fontSize:"30px"}}><b>{curso}</b>:</p> 
<span style={{marginTop:"38px", marginLeft:"10px"}}>{children}</span>

</div>
);





}

export default Estudio;