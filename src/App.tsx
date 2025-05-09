import Button from "./components/Button";

function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("Button clicked:", e.target);
  };
  return (
    <main className="font-jetBrains">
      <h1 className="text-grey-600 mb-4 text-center text-preset-4">
        Password Generator
      </h1>
      <Button onClick={handleClick}>GENERATE</Button>
    </main>
  );
}

export default App;
