import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./components/header";
import { SearchButton } from "./components/button";
import { MainDisplay } from "./components/mainDisplay";

function App() {
  const [userInput, setUserInput] = useState("");
  const [temp, setTemp] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [place, setPlace] = useState(false);

  function saveUserInput(event) {
    setUserInput(event.target.value);
  }

  const geoData = async () => {
    try {
      setError("");
      setTemp(null);
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_GEO_API}?name=${userInput}&count=1&language=en&format=json`,
      );
      const responseData = await response.json();
      console.log(responseData);
      setPlace(responseData);

      if (!responseData.results) {
        setError("Cannot Find");
        setTemp(null);

        return;
      }

      const lat = responseData.results[0].latitude;
      const lon = responseData.results[0].longitude;
      const response2 = await fetch(
        `${import.meta.env.VITE_WEATHER_API}?latitude=${lat}&longitude=${lon}&current=temperature_2m`,
      );
      const tempData = await response2.json();

      setTemp(tempData);

      setError("");
      setUserInput("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onEnterkey = (event) => {
    if (event.key === "Enter") geoData();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen bg-linear-to-tr from-neutral-900 via-neutral-800 to-black text-white p-4">
      <Header />

      <MainDisplay
        temp={temp}
        error={error}
        isLoading={isLoading}
        place={place}
      />

      <SearchBar
        value={userInput}
        onChange={saveUserInput}
        onKeyDown={onEnterkey}
      />

      <SearchButton onClick={geoData} />
    </div>
  );
}
export default App;
