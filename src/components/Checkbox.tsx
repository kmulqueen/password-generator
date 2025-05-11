export type CheckboxProps = {
  id: string;
  label: string;
};

export default function Checkbox({ id, label }: CheckboxProps) {
  return (
    <div className="checkbox-container py-2">
      <input type="checkbox" name={id} id={id} className="sr-only" />
      <label htmlFor={id} className="flex cursor-pointer items-center gap-4">
        <span className="custom-checkbox-visual">
          <svg
            width="14"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            className="check-icon"
          >
            <path
              stroke="#18171F"
              strokeWidth="3"
              fill="none"
              d="M1 5.607 4.393 9l8-8"
            />
          </svg>
        </span>
        <span className="text-preset-4 text-grey-200">{label}</span>
      </label>
    </div>
  );
}
