import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import News from "./components/News";

function App() {
  const [data, setData] = useState({ hits: [] });
  const [dateOrPop, setDateOrPop] = useState("search");
  const [query, setQuery] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [timeZoneValue, setTimeZoneValue] = useState("All time");
  useEffect(() => {
    fetch(
      `https://hn.algolia.com/api/v1/${dateOrPop}?query=${query}&tags=story&numericFilters=${timeZone}`
    )
      .then((res) => res.json())
      .then((d) => setData(d));
  }, [dateOrPop, query, timeZone]);

  return (
    <>
      <div className="flex-col">
        <SearchBar
          dateOrPop={dateOrPop}
          setDateOrPop={setDateOrPop}
          query={query}
          setQuery={setQuery}
          timeZone={timeZone}
          setTimeZone={setTimeZone}
          timeZoneValue={timeZoneValue}
          setTimeZoneValue={setTimeZoneValue}
        />
        <News data={data.hits} />
      </div>
    </>
  );
}

export default App;
