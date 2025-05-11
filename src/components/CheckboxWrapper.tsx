import type { CheckboxProps } from "./Checkbox";
import Checkbox from "./Checkbox";

export default function CheckboxWrapper() {
  const checkboxOptions: CheckboxProps[] = [
    {
      id: "uppercase",
      label: "Include Uppercase Letters",
    },
    {
      id: "lowercase",
      label: "Include Lowercase Letters",
    },
    {
      id: "numbers",
      label: "Include Numbers",
    },
    {
      id: "symbols",
      label: "Include Symbols",
    },
  ];
  return (
    <fieldset className="w-full min-w-0 border-0 bg-grey-800 px-4">
      <legend className="sr-only">Choose password rules:</legend>
      {checkboxOptions.map((option) => (
        <Checkbox id={option.id} label={option.label} key={option.id} />
      ))}
    </fieldset>
  );
}
