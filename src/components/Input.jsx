import { useState } from "react";
import searchIcon from "../assets/images/search.png";
function Input({ inputValue }) {

const [value, setValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-2"
    >
      <input
        type="text"
        class="block w-full px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalueid:border-pink-500 invalueid:text-pink-600
      focus:invalueid:border-pink-500 focus:invalueid:ring-pink-500
    "
        placeholder="Enter city or country name"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className={`rounded-full shadow p-[7px] border border-slate-300 ${!value && "cursor-not-allowed"}`}
        type="submit"
        disabled={!value}
      >
        <img src={searchIcon} alt="search icon" />
      </button>
    </form>
  );
}

export default Input;
