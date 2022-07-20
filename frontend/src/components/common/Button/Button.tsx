import { ButtonProps } from "../../../types/types";

const Button = ({ onClick, label, type }: ButtonProps) => (
  <button
    className={
      type === "search"
        ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        : "bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    }
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
