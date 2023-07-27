const PokemonList = ({ pokemon }) => {
  return (
    <>
      <ul>
        {pokemon.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </>
  );
};

export default PokemonList;
