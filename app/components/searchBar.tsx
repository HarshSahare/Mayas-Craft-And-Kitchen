import React from "react";
import Image from "next/image";

function SearchBar() {
  return (
    <div className="py-5 bg-navbar sticky top-15 ">
      <div className="bg-white py-4 px-4.25 rounded-2xl flex">
        <input
          type="text"
          placeholder="Search  “birthday gift”"
          className="font-dm font-medium flex-1 outline-0"
        />
        <Image
          src="/svg/search_icon_solid.svg"
          height={16}
          width={16}
          alt="search icon"
        />
      </div>
    </div>
  );
}

export default SearchBar;
