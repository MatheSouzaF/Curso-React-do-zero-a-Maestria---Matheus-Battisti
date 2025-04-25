import React from "react";
const ShowUserName = ({ brand, km, color, newCar }) => {
  return (
    <div>
      {/* <div>
        <h2>O Nome do usuário: {props.name}</h2>
      </div> */}
      <div>
        <h2>Detalhe do Carro</h2>
        <ul>
          <li>Marca: {brand}</li>
          <li>KM: {km}</li>
          <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Esse carro é novo!</p>}
      </div>
    </div>
  );
};

export default ShowUserName;
