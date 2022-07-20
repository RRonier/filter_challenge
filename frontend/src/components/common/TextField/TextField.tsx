import { TextFieldProps } from "../../../types/types";

export const TextField = ({ onHandleChange, value }: TextFieldProps) => (
  <div className="flex justify-start">
    <div className="mb-3 xl:w-60">
      <input
        type="search"
        name="search"
        onChange={onHandleChange}
        value={value}
        className="
            form-control
            block
            w-48
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white 
            focus:border-blue-600 focus:outline-none"
        id="exampleSearch2"
        placeholder="Search by name"
      />
    </div>
  </div>
);
