type Props = {
  label: string;
  required?: boolean;
  type?: string | "text";
  name?: string;
  placeholder?: string;
  handleChange?: any;
  handleBlur?: any;
};

export function InputText({
  label,
  required,
  type,
  name,
  placeholder,
  handleBlur,
  handleChange,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name">
        {label}

        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-[300px] border h-8 px-2 rounded placeholder:text-gray-600"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
