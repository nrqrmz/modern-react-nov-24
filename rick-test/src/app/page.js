import { fetchAllCharacters } from "../services/api";
import Card from "../components/Card";

export default async function Home() {
  const characters = await fetchAllCharacters();

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div>
        {characters.map((character) => (
          <div key={character.id}>
            <Card
              key={character.id}
              name={character.name}
              image={character.image}
              species={character.species}
              gender={character.gender}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
