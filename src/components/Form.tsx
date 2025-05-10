import type { FormEvent, PropsWithChildren } from "react";

export default function Form({ children }: PropsWithChildren) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("TODO - Generate password");
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
}
