import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Search from "../../components/Search/Search";

export default function Characters(){
    const [characters, setCharacters] = useState([]);

    const getCharacters = async (searchText = "") => {
      const res = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=" + searchText // añade &character" + searchText
      );
      console.log(res.data)
      setCharacters(res.data)
    };
  
    useEffect(() => getCharacters, []);

    return(
        <>
        <h2>Characters Page</h2>
    <div>
      <Search onSubmit={getCharacters}></Search>
      <Gallery list={characters}></Gallery>
    </div>
    </>
    );
    };
