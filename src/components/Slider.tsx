import { useState, useEffect, useRef } from "react";

export default function Slider() {
  const [value, setValue] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  /* 
    Update the CSS variable when the value changes.
    This renders the green progress color on the slider.
  */
  useEffect(() => {
    if (inputRef.current) {
      const min = Number(inputRef.current.min) || 0;
      const max = Number(inputRef.current.max) || 100;
      const percentage = ((value - min) / (max - min)) * 100;
      inputRef.current.style.setProperty(
        "--progress-percentage",
        `${percentage}%`,
      );
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <fieldset className="w-full min-w-0">
      <div className="grid grid-cols-2 grid-rows-2 gap-8 bg-grey-800 p-4">
        <label htmlFor="character-length" className="text-grey-200">
          Character Length
        </label>
        <p className="place-self-end text-green-200">{value}</p>
        <input
          ref={inputRef}
          type="range"
          name="character-length"
          id="character-length"
          min={0}
          max={20}
          value={value}
          onChange={handleChange}
          step={1}
          className="progress-range col-span-full"
        />
      </div>
    </fieldset>
  );
}
