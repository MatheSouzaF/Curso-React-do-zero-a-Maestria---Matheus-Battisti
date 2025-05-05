const Events = () => {
  const HandleMyEvent = (e) => {
    console.log(e);
    console.log("Hola, soy un evento");
  };
  const renderSomething = (x) => {
    if (x) {
      return <h1>Hola</h1>;
    } else {
      return <h1>Adios</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={HandleMyEvent}>Click aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Click Aqui Também")}>
          Click Aqui Também
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
      <img src="/img1.jpg" alt="" />
    </div>
  );
};

export default Events;
