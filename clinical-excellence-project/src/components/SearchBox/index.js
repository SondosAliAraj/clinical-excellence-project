// import React, { useState } from "react";

// function SearchBox() {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const handleSearchClick = () => setIsExpanded(!isExpanded);

//   return (
//     <div className="search-box">
//       <button className="search-icon" onClick={handleSearchClick}>
//         <i className="fa fa-search" aria-hidden="true"></i>
//       </button>

//       <div className={`search-input ${isExpanded ? "expanded" : ""}`}>
//         <input type="text" placeholder="Search..." />
//         <button className="close-icon" onClick={handleSearchClick}>
//           <i className="fa fa-times" aria-hidden="true"></i>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SearchBox;

import React, { useState } from "react";
import { BiSearch, BiX } from "react-icons/bi";

function SearchBox() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleSearchClick = () => setIsExpanded(!isExpanded);

  return (
    <div className="search-box">
      <button className="search-icon" onClick={handleSearchClick}>
        <BiSearch />
      </button>

      <div className={`search-input ${isExpanded ? "expanded" : ""}`}>
        <input type="text" placeholder="Search..." />
        <button className="close-icon" onClick={handleSearchClick}>
          <BiX />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
