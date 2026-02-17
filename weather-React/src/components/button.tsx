export function SearchButton({ onClick }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-2xl text-white font-semibold transition-all hover:bg-white/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
      <button onClick={onClick}>Search</button>
    </div>
  );
}
