import type { PropsWithChildren } from "react";

type Props = {
  onClick?: React.MouseEventHandler;
  type: "button" | "submit" | "reset";
};

const Button = ({ children, onClick, type }: PropsWithChildren<Props>) => {
  return (
    <button
      className="flex w-full cursor-pointer items-center justify-center gap-4 bg-green-200 py-4 text-preset-4 text-grey-800 hover:bg-grey-800 hover:text-green-200 hover:outline-2 hover:outline-green-200 hover:**:fill-green-200 focus-visible:bg-grey-800 focus-visible:text-green-200 focus-visible:outline-2 focus-visible:outline-green-200 focus-visible:**:fill-green-200 active:bg-grey-800 active:text-green-200 active:outline-2 active:outline-green-200 active:**:fill-green-200 sm:text-preset-3"
      onClick={onClick}
      type={type}
    >
      {children}
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          className="fill-grey-800"
          d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
        />
      </svg>
    </button>
  );
};

export default Button;
