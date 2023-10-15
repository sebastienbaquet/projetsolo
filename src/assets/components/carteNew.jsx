import Carte from "./carte";
import React from "react";
const NewCarte = ({animalfatal})=>{
return(
<div>
{animalfatal.map((animalNew)=>(
    <Carte key={animalNew.name} animalNew={animalNew}/>
))}
</div>

);

}
export default NewCarte;