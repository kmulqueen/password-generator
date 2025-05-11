import type { FormEvent, PropsWithChildren } from "react";
import { generatePassword } from "../helpers/generatePassword";
import type { StrengthLevel } from "./StrengthState";

type FormProps = PropsWithChildren<{
  handleGeneratePassword: (generatedPassword: string) => void;
  handleSetStrengthLevel: (level: StrengthLevel) => void;
}>;

export default function Form({
  children,
  handleGeneratePassword,
  handleSetStrengthLevel,
}: FormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const passwordData = generatePassword(data);
    handleGeneratePassword(passwordData.password);
    handleSetStrengthLevel(passwordData.strengthLevel);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="gap- flex flex-col gap-8 bg-grey-800 p-4"
    >
      {children}
    </form>
  );
}
