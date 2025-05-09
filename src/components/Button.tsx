import type { PropsWithChildren } from "react";

type Props = {
  onClick?: React.MouseEventHandler;
};

const Button = ({ children, onClick }: PropsWithChildren<Props>) => {
  return (
    <button
      className="flex grow py-4 bg-green-200 text-grey-800 text-preset-4"
      onClick={onClick}
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
