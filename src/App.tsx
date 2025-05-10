import Button from "./components/Button";
import TextField from "./components/TextField";

function App() {
  const handleClick = (): void => {
    console.log("Generate password");
  };
  return (
    <main className="font-jetBrains">
      <h1 className="text-grey-600 mb-4 text-center text-preset-4">
        Password Generator
      </h1>
      <TextField />
      <Button onClick={handleClick}>GENERATE</Button>
    </main>
  );
}

export default App;
