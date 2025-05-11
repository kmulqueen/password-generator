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
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (): void => {
    if (password.length) {
      navigator.clipboard.writeText(password);
      setIsCopied(true);
    }
  };
  const handleCopyReset = (): void => {
    setIsCopied(false);
  };
  const handleGeneratePassword = (generatedPassword: string): void => {
    setPassword(generatedPassword);
  };
  const handleSetStrengthLevel = (level: StrengthLevel): void => {
    setStrengthLevel(level);
  };

  return (
    <main className="font-jetBrains sm:w-[33.75rem]">
      <h1 className="mb-4 text-center text-preset-4 text-grey-600 sm:mb-8 sm:text-preset-2">
        Password Generator
      </h1>
      <TextField
        onClick={handleCopyClick}
        password={password}
        isCopied={isCopied}
      />
      <Form
        handleGeneratePassword={handleGeneratePassword}
        handleSetStrengthLevel={handleSetStrengthLevel}
        handleCopyReset={handleCopyReset}
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
