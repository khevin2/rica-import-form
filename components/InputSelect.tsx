type Props = {
    label: string;
    name: string;
    options: string[];
    required?:boolean;
    placeholder?:string;
    handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}

export default function InputSelect({label,name,options,required,placeholder,handleBlur,handleChange}:Props){
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor="name">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <select
        onChange={handleChange}
        onBlur={handleBlur}
          className="w-[300px] border h-8 px-2 rounded placeholder:text-gray-600"
          name={name}
        >
          <option>Select</option>
          {options.map((option, key) => (
            <option key={key} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
}