import { ButtonProps } from "../../../types/types";

const Button = ({ onClick, label, type, disabled }: ButtonProps) => (
  <button
    className={
      type === "search" && !disabled
        ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        : type === "search" && disabled
        ? "py-2 px-4 text-white bg-blue-300 rounded focus:outline-none cursor-default"
        : "bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    }
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
