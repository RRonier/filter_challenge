import { DropDownProps } from "../../../types/types";

const DropDown = ({
  value,
  onHandleChange,
  providersList,
  insurancesList,
  name,
  placeholder,
  text,
}: DropDownProps) => (
  <div className="flex justify-start">
    <div className="mb-3 xl:w-44">
      <select
        name={name}
        value={value}
        onChange={onHandleChange}
        placeholder={placeholder}
        className="form-select appearance-none
            block
            w-40
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white
            focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
      >
        <option value="">{text}</option>
        {providersList
          ? providersList.map(({ provider }, key) => (
              <option key={key} value={provider}>
                {provider}
              </option>
            ))
          : insurancesList
          ? insurancesList.map(({ insuranceType }, key) => (
              <option key={key} value={insuranceType}>
                {insuranceType}
              </option>
            ))
          : null}
      </select>
    </div>
  </div>
);

export default DropDown;
