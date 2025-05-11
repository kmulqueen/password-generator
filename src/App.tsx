import { useState } from "react";
import type { StrengthLevel } from "./components/StrengthState";
import Button from "./components/Button";
import Slider from "./components/Slider";
import TextField from "./components/TextField";
import Form from "./components/Form";
import CheckboxWrapper from "./components/CheckboxWrapper";
import StrengthState from "./components/StrengthState";

function App() {
  const [password, setPassword] = useState("");
  const [strengthLevel, setStrengthLevel] = useState<StrengthLevel>(0);

  const handleCopyClick = (): void => {
    console.log("TODO - Copy password to clipboard.");
  };
  const handleGeneratePassword = (generatedPassword: string): void => {
    setPassword(generatedPassword);
  };
  const handleSetStrengthLevel = (level: StrengthLevel): void => {
    setStrengthLevel(level);
  };

  return (
    <main className="font-jetBrains">
      <h1 className="mb-4 text-center text-preset-4 text-grey-600">
        Password Generator
      </h1>
      <TextField onClick={handleCopyClick} password={password} />
      <Form
        handleGeneratePassword={handleGeneratePassword}
        handleSetStrengthLevel={handleSetStrengthLevel}
      >
        <Slider />
        <CheckboxWrapper />
        <StrengthState strengthLevel={strengthLevel} />
        <Button type="submit">GENERATE</Button>
      </Form>
    </main>
  );
}

export default App;
