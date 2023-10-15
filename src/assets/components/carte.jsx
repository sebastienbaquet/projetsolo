import React from "react";
import "../components/carteCss.css"
import { useState } from "react";


const Carte = ({ animalNew }) => {

  const [isValidation, setIsValidation] = useState(animalNew.isValidation);
  const handleClickValidation = () => {
    setIsValidation(!isValidation);
  };
  const isValidationClass = isValidation ? 'isValidation' : 'isNotValidation';

  
  return (
    <div className="globale">
      <div className="titre">
        <h1>{animalNew.name}</h1>
      </div>
        <img className="page" src={animalNew.image} alt={animalNew.name}/>
      <div>
      <p>
        {animalNew.description}
      </p>
      </div>
      <button onClick={handleClickValidation} className={isValidationClass}> clic</button>
      
    </div>
  );
};

export default Carte;
