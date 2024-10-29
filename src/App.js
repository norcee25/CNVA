const App = () => {
  const hello = "Hello World"
  return (
    <> 
      <h1>{hello}</h1>
      <h2>Hello React</h2>
      <Hello />
      <World />
    </>
  );
};


const Hello = () => {
  return (
    <>
    <h1>Component Hello</h1>
    <World />
    </>
  );
};

const World = () => {
  return <h3>Component World</h3>
};
  export default App;