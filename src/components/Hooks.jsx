import { useState } from "react";

const Hooks = () => {
  const someDate = 10;

  const [number, setNumber] = useState(15);
  return (
    <div>
      <p>Valor: {someDate}</p>
      <button onClick={() => {}}>Mudar Valor</button>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Mudar o state</button>
    </div>
  );
};

export default Hooks;
