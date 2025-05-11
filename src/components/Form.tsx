import type { FormEvent, PropsWithChildren } from "react";

type FormProps = PropsWithChildren<{
  handleGeneratePassword: (generatedPassword: string) => void;
}>;

export default function Form({ children, handleGeneratePassword }: FormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("TODO - Generate password");
    const data = new FormData(e.currentTarget);
    console.log(data);
    const generatedPassword = "GeneratedPassword";
    handleGeneratePassword(generatedPassword);
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
