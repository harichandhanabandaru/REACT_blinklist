import React, { useState } from "react";
import JSONDATA from "/home/haricb/Desktop/REACT/blinklistapp/src/data/db.json";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [array,setArray]=useState(JSONDATA.notes)
//   alert(JSONDATA)
  console.log("jsondata os ",JSONDATA)

  return (
    <div>
      {/* alert(JSONDATA) */}
      <input
        type="text"
        height="50px"
        placeholder="search....."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {/* {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.title}</p>
          </div>
        );
      })} */}
      {array.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Searchbar;
