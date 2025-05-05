import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Forms from "./components/Forms";
function App() {
  return (
    <>
      <h1>Forms</h1>
      <Forms
        user={{
          name: "matheus",
          email: "matheus@gmail.com",
          bio: "advogado",
          role: "admin",
        }}
      />
    </>
  );
}

export default App;
