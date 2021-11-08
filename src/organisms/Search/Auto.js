import React, { useEffect, useState, useRef } from "react";
//import logo from "./logo.svg";
 import "./auto.css";
 import BookSearch from "../../molecules/BookInfoSearch/BookSearch"
import { faNotEqual } from "@fortawesome/free-solid-svg-icons";

function Auto() {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const pokemon = [];
    const promises = new Array(20)
      .fill()
      .map((v, i) => fetch(`http://localhost:8000/notes/${i + 1}`)); //fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`)
    Promise.all(promises).then((pokemonArr) => {
      return pokemonArr.map((value) =>
        value.json().then(
          (
            { title, author,id } 
          ) => pokemon.push({ title, author,id }) 
        )
      );
    });
    setOptions(pokemon);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updatePokeDex = (poke,note,i) => {
    setSearch(poke);
    setDisplay(false);
    
  };

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
      <input
        id="auto"
        onClick={() => setDisplay(!display)}
        placeholder="Type to search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
     
      {display && (
        <div className="autoContainer">
          {options
            .filter(
              //   ({ title }) => title.indexOf(search.toLowerCase()) > -1
              ({ title }) => title.toLowerCase().includes(search.toLowerCase())
            ) /* name replaced with title */

            //val.title.toLowerCase().includes(searchTerm.toLowerCase())
            .map((value, i) => {
              return (
                <div
                  onClick={() => updatePokeDex(value.title,value,value.id)} /*(value.name) */
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.title}</span> {/* {value.name} */}
                  <span>{value.author}</span> {/* added*/}
                  {/* <img src={value.sprite} alt="pokemon" /> */}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Auto;

// function App() {
//   return (
//     <div className="App">
//       <h1>Custom AutoComplete React</h1>
//       <div className="logo"></div>
//       <div className="auto-container">
//         <Auto />
//       </div>
//     </div>
//   );
// }

// export default App;
