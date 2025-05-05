import React, { useState } from "react";
import "./MyForms.css"; // Importação do arquivo CSS

const Forms = ({ user }) => {
  // GErecimento de dados do formulário

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando o formularios");
    console.log(name, email, bio, role);

    setName("");
    setEmail("");
    setBio("");
  };

  //   console.log(name);
  //   console.log(email);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name} // Adicionando o valor do input
          />
        </div>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o seu e-mail"
            value={email} // Adicionando o valor do input
          />
        </label>
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        <label>
          <span>Selec</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Forms;
