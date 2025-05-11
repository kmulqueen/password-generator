import type { FormEvent, PropsWithChildren } from "react";

export default function Form({ children }: PropsWithChildren) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("TODO - Generate password");
    const data = new FormData(e.currentTarget);
    console.log(data);
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
