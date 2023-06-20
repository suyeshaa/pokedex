import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Search = () => {
  const [pokes, setPokes] = useState([]);

  const fetchData = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokes(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <input type="text" placeholder="search pokemon" />
      <button>Search</button>
      <button onClick={clickHandler}>Filter</button>
      {clicked ? (
        <div>
          <ul>
            <li>normal</li> <li>fighting</li> <li>flying</li> <li>poison</li>
            <li>ground</li> <li>rock</li> <li>bug</li> <li>fairy</li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}

      {pokes.map((poke, i) => {
        return <Card key={i} poke={poke} />;
      })}
      {/* <Card /> */}
    </div>
  );
};

export default Search;
