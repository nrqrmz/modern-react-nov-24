export async function fetchAllCharacters() {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  let allCharacters = [];
  let nextUrl = baseUrl;

  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json();
    allCharacters = allCharacters.concat(data.results);
    nextUrl = data.info.next;
  }

  return allCharacters;
}
