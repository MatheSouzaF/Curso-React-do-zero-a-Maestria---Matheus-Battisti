import React from "react";
import { useState } from "react";
const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "João", "Maria", "Ana"]);
  // const [list, setList] = useState(["Matheus", "Pedro", "João", "Maria", "Ana"]);

  const [users, setList] = useState([
    { id: 1, name: "Matheus", age: 20 },
    { id: 2, name: "Pedro", age: 22 },
    { id: 3, name: "João", age: 25 },
    { id: 4, name: "Maria", age: 30 },
    { id: 5, name: "Ana", age: 28 },
    { id: 6, name: "Matheus", age: 20 },
    { id: 7, name: "Pedro", age: 22 },
    { id: 8, name: "João", age: 25 },
    { id: 9, name: "Maria", age: 30 },
    { id: 10, name: "Ana", age: 28 },
  ]);

  const deleteRandom = () => {
    if (users.length === 0) return; // Verifica se ainda há usuários para excluir
    const randomIndex = Math.floor(Math.random() * users.length); // Gera um índice aleatório baseado no tamanho atual da lista
    const randomId = users[randomIndex].id; // Obtém o ID correspondente ao índice aleatório
    setList((prevUsers) => {
      return prevUsers.filter((user) => randomId !== user.id); // Exclui o usuário com o ID gerado
    });
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li className="flex" key={user.id}>
            <p>{user.name}</p>
            <p>Age: {user.age}</p>
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete User Radom</button>
    </div>
  );
};

export default ListRender;
