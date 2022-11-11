import React from "react";

function SearchBar(props) {
  const {
    dateOrPop,
    setDateOrPop,
    query,
    setQuery,
    timeZone,
    setTimeZone,
    timeZoneValue,
    setTimeZoneValue,
  } = props;
  const date = new Date();
  const dateInSec = date.getTime() / 1000;
  return (
    <div className="flex bg-orange-400 justify-center py-4">
      <input
        type="text"
        placeholder="search here"
        value={query}
        className="mx-4 px-2 focus:outline-none"
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        value={dateOrPop}
        className="mx-4 focus:outline-none"
        onChange={(e) => setDateOrPop(e.target.value)}
      >
        <option value="search">Popularity</option>
        <option value="search_by_date">Date</option>
      </select>
      <select
        value={timeZoneValue}
        className="mx-4 focus:outline-none"
        onChange={(e) => {
          const { value } = e.target;
          if (value === "All time") {
            setTimeZone("");
          } else if (value === "Last 24h") {
            setTimeZone(`created_at_i>${dateInSec - 86400}`);
          } else if (value === "Past Week") {
            setTimeZone(`created_at_i>${dateInSec - 86400 * 7}`);
          } else if (value === "Past Month") {
            setTimeZone(`created_at_i>${dateInSec - 86400 * 30}`);
          } else if (value === "Past Year") {
            setTimeZone(`created_at_i>${dateInSec - 86400 * 365}`);
          }
          setTimeZoneValue(value);
        }}
      >
        <option value="All time">All time</option>
        <option value="Last 24h">Last 24h</option>
        <option value="Past Week">Past Week</option>
        <option value="Past Month">Past Month</option>
        <option value="Past Year">Past Year</option>
      </select>
    </div>
  );
}

export default SearchBar;
