import { CiSearch } from "react-icons/ci";

interface Props {
  /** The onchange callback with paramater target value */
  onchange: (e: string) => void;
  /** The value of the input */
  value: string;
}

const SearchFilter = ({ value, onchange }: Props) => {
  return (
    <label className="relative block">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <CiSearch />
      </span>
      <input
        type="text"
        className="border rounded-md pl-8 p-2 w-full lg:max-w-56 text-sm border-gray-600 focus:border-2 placeholder:italic placeholder:text-slate-400"
        placeholder="Please input ticker"
        value={value}
        onChange={(e) => onchange(e.target.value)}
      />
    </label>
  );
};

export default SearchFilter;
