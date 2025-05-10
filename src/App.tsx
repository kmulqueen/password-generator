import Button from "./components/Button";
import Slider from "./components/Slider";
import TextField from "./components/TextField";
import Form from "./components/Form";

function App() {
  const handleCopyClick = (): void => {
    console.log("TODO - Copy password to clipboard.");
  };

  return (
    <main className="font-jetBrains">
      <h1 className="mb-4 text-center text-preset-4 text-grey-600">
        Password Generator
      </h1>
      <TextField onClick={handleCopyClick} />
      <Form>
        <Slider />
        <Button type="submit">GENERATE</Button>
      </Form>
    </main>
  );
}

export default App;
