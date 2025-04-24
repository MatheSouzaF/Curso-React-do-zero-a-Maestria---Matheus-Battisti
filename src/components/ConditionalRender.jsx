import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("Lucas");
  return (
    <div>
      <h1>Isso Será Exibido</h1>
      {x && <p>Se X for True, Sim!</p>}

      {name === "Matheus" ? (
        <p>O nome é Matheus!</p>
      ) : (
        <p>O nome não encontrado</p>
      )}
      <button onClick={() => setName("Matheus")}>Click Aqui!</button>
    </div>
  );
};

export default ConditionalRender;
