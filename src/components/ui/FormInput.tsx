import type { FormInputProp } from "../../types";

export const FormInput = ({
  label,
  type,
  name,
  id,
  value,
  onChange,
}: FormInputProp) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className='px-2 py-2 border border-gray-300 rounded-lg w-full'
        onChange={onChange}
      />
    </div>
  );
};