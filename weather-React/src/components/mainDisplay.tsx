export function MainDisplay({ temp, error, place, isLoading, fahren }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl shadow-2xl max-w-md w-2xl text-center transition-all  ">
      {temp && place?.results?.[0] && (
        <div className="flex flex-col gap-1">
          <span className="text-sm uppercase tracking-widest text-white/60">
            Current Temperature
          </span>

          <h2 className="text-3xl font-bold">{place.results[0].name}</h2>

          <div className="text-4xl font-extrabold  text-transparent bg-clip-text bg-linear-to-b from-white to-white/50">
            {fahren
              ? `${((temp.current.temperature_2m * 9) / 5 + 32).toFixed(1)}°F`
              : `${temp.current.temperature_2m}°C`}
          </div>
        </div>
      )}
      <div className="text-red-600 text-2xl  ">
        {error && "Cannot Find, Try Again!"}
      </div>
      {isLoading && (
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin "></div>
        </div>
      )}
    </div>
  );
}
