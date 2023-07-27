import { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

const PokemonApp = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [loading, setLoading] = useState(true);
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();

  useEffect(() => {
    let cancel;
    setLoading(true);
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPokemon(res.data.results.map((p) => p.name));
        setLoading(false);
        setPreviousPage(res.data.previous);
        setNextPage(res.data.next);
        console.log(res.data.next);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    return () => {
      cancel();
    };
  }, [currentPage]);

  if (loading) {
    return "Looding......";
  }

  const goToPrevPage = () => {
    setCurrentPage(previousPage);
  };

  const goToNextPage = () => {
    setCurrentPage(nextPage);
  };
  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToPrevPage={previousPage ? goToPrevPage : null}
        goToNextPage={nextPage ? goToNextPage : null}
      />
    </>
  );
};

export default PokemonApp;
