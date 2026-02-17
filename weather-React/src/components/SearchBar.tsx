export function SearchBar({ value, onChange, onKeyDown }) {
  return (
    <div className="text-shadow-zinc-400 drop-shadow-black text-xl ">
      <input
        className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-xl "
        placeholder="Search a City"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      ></input>
    </div>
  );
}
