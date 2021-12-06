import React from "react";
import '../App.css';

const Car = ({children, color, year}) => {


  const colorInfo = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: Néant</p>);
  
  if(children) {
    return(
      <div className="cars">
        <p>Marque: {children}</p>
        <p>Age: {year}</p>
        {colorInfo}
      </div>
    )
  }else{
    return null;
  }

}
export default Car;