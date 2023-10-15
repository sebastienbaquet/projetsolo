import React from "react";
import "../components/carteCss.css"

const Carte = ({ children }) => {
  return (
    <div className="globale">
      <div className="titre">
        <h1>{children}</h1>
      </div>
        <img className="page" src="src\assets\th.jpg" alt="la_belle_mere" />
      <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        voluptas magni illo quidem officiis dolorum earum, aut distinctio
        quibusdam, quis, nemo illum laudantium officia? Facilis, quam sit.
        Aliquid, pariatur quasi!
      </p>
      <button className="selection"> clic</button>
      </div>
    </div>
  );
};

export default Carte;
