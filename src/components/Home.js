import React, { useState, useEffect } from 'react';
import Card from './Card';
import Spinner from './Spinner';

function Home({ url }) {
  const [teamHeroes, setTeamHeroes] = useState([]);
  const [displayTeam, setDisplayTeam] = useState(false);

  async function getHeroes() {
    const response = await fetch(`${url}644`).catch((err) =>
      alert(err.message)
    );
    if (response.ok) {
      return response.json();
    }
  }

  useEffect(async () => {
    const heroesData = await getHeroes();
    setTeamHeroes([...teamHeroes, heroesData]);
    setDisplayTeam(true);
  }, []);
  return (
    <>
      {displayTeam ? (
        teamHeroes.map((character) => {
          console.log(character);
          return (
            <div
              className={
                teamHeroes.length > 1
                  ? 'column is-3'
                  : 'column is-half is-offset-3'
              }
            >
              <Card
                name={character.name.toString()}
                image={character.image}
                powerstats={character.powerstats}
              />
            </div>
          );
        })
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Home;
