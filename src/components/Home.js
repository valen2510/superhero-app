import React, { useState, useEffect } from 'react';
import Card from './Card';
import CardBack from './CardBack';
import Spinner from './Spinner';
import ReactCardFlip from 'react-card-flip';

function Home({ url }) {
  const [teamHeroes, setTeamHeroes] = useState([]);
  const [displayTeam, setDisplayTeam] = useState(false);
  const [flip, isFlipped] = useState(true);

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
    setTeamHeroes((teamHeroes) => [...teamHeroes, heroesData]);
    setDisplayTeam(true);
  }, []);
  return (
    <>
      {displayTeam ? (
        teamHeroes.map((character, i) => {
          return (
            <div
              className={
                teamHeroes.length > 1
                  ? 'column is-3'
                  : 'column is-half is-offset-3'
              }
            >
              <ReactCardFlip isFlipped={!flip} flipDirection='vertical'>
                <Card
                  name={character.name}
                  image={character.image}
                  powerstats={character.powerstats}
                  isFlipped={isFlipped}
                  key={i}
                />
                <CardBack
                  appearance={character.appearance}
                  biography={character.biography}
                  image={character.image}
                  work={character.work}
                  name={character.name}
                  isFlipped={isFlipped}
                  key={i}
                />
              </ReactCardFlip>
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
