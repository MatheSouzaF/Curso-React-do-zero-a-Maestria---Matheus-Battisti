import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import Fragement from "./components/Fragement";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  // const [count, setCount] = useState(0);
  // const name = "Sophia";

  // const cars = [
  //   { id: 1, brand: "VW", km: 10000, color: "verde", newCar: false },
  //   { id: 2, brand: "Ford", km: 0, color: "Azul", newCar: true },
  //   { id: 3, brand: "Fiat", km: 1200, color: "Rosa", newCar: false },
  // ];

  // function showMessage() {
  //   console.log("Fui clicado");
  // }
  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };
  return (
    <>
      {/* <ListRender /> */}
      {/* <ConditionalRender /> */}
      {/* <ShowUserName name={name} /> */}
      {/* <ShowUserName brand="VW" km={10000} color="verde" newCar={false} />
      <ShowUserName brand="Ford" km={0} color="Azul" newCar={true} />
      <ShowUserName brand="Fiat" km={1200} color="Rosa" newCar={false} /> */}

      {/* {cars.map((car) => (
        <ShowUserName
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))} */}
      {/* 
      <Fragement propFragement="teste" />
      <Container>
        <p>Esse é o título do é do children</p>
      </Container>
      <Container>
        <p>Testando</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} /> */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </>
  );
}

export default App;
