import MyComponent from "./MyComponent";
const FirstComponent = () => {
  const name = "Matheus";

  const data = {
    age: 28,
    job: "developer",
  };

  return (
    <div>
      <h1>Meu nome é {name}</h1>
      <p className="text">My job is {data.job}</p>
      <MyComponent />
    </div>
  );
};
export default FirstComponent;
