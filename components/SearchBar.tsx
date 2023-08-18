"use client";

import { useState } from "react";
import { SearchManufacture } from ".";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const hadleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={hadleSearch}>
      <div className="searchbar__item">
        <SearchManufacture
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
