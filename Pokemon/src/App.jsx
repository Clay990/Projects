import { useState, useEffect } from "react";
import {giphy} from "./stiker"
import "./App.css";

function App() {
  const [pokemon, setpokemon] = useState([]);
  const [pokemone, setpokemone] = useState([]);
  const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nexturl, setnexturl] = useState("");
  const [search, setsearch] = useState("");

  const [pokecount, setpokecount] = useState();
  async function fetchPokemons() {
    const res = await fetch(url);
    const pokeData = await res.json();
    setnexturl(pokeData.next);

    setpokecount(pokeData.count);
    pokeData.results.map(async (poke) => {
      const pokename = poke.name;
      const pokeurl = poke.url;
      const pokeres = await fetch(pokeurl);
      const pokemonData = await pokeres.json();
      const pokeimge = pokemonData.sprites.other.home.front_default;
      const pokeid = pokemonData.id;

      setpokemon((prev) => [
        ...prev,
        {
          pokeid: pokeid,
          name: pokename,
          imge: pokeimge,
        },
      ]);
    });
  }

  useEffect(() => {
    fetchPokemons();
  }, [url]);

  const handlemore = () => {
    seturl(nexturl);
  };
  const handleinput = (e) => {
    setsearch(e.target.value);
  };
  const handlesearch = (e) => {
    async function searpoke() {
      const pokeres = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + search
      );
      const pokemonData = await pokeres.json();
      const pokename = pokemonData.name;
      const pokeimge = pokemonData.sprites.other.home.front_default;
      const pokeid = pokemonData.id;

      setpokemone(() => [
        {
          pokeid: pokeid,
          name: pokename,
          imge: pokeimge,
        },
      ]);
    }
    searpoke();
  };
  return (
    <div className="App">
      <header>
        <h1>Pokémon</h1>
      </header>
      <main>
        <div className="center">
          <div className="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="What pokemon you looking for?"
              onChange={handleinput}
            />
            <button onClick={handlesearch} type="submit" class="searchButton">
              <i class="fa fa-search">S</i>
            </button>
          </div>
        </div>
        <p id="pokecount">Pokemon - {pokecount}</p>
        {pokemone.length > 0
          ? pokemone.map((poke) => (
              <div key={poke.id} className="searcard">
                                {giphy[poke.name] ? (
                 <img className="searimg" src={giphy[poke.name]} alt="Pokemon Sticker" />
                ) : (<img className="searimg" src={poke.imge} alt="" />)}
              
                <h3>{poke.name}</h3>
              </div>
            ))
          : ""}
        <div className="cards">
          {pokemon.length > 0 ? (
            pokemon.map((poke) => (
              <div key={poke.id} className="card">
               
                {giphy[poke.name] ? (
                 <img src={giphy[poke.name]} alt="Pokemon Sticker" />
                ) : (<img className="img" src={poke.imge} alt="" />)}
                <h3>{poke.name}</h3>
              </div>
            ))
          ) : (<div>
             <img className="center" src="https://media.tenor.com/qW7E0f6-Q5UAAAAi/rain-doll-anime.gif" alt="Pokemon Sticker" />
             <p>Loading...</p>
          </div>
           
          )}
        </div>
        <button className="more" onClick={handlemore}>
          More
        </button>
      </main>
    </div>
  );
}

export default App;
