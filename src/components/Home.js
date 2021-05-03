import React, { useState, useEffect } from 'react';
import Card from './Card';
import Spinner from './Spinner';
import Footer from './Footer';
import AverageSummary from './AverageSummary';

function Home({ url }) {
  const [teamHeroes, setTeamHeroes] = useState([]);
  const [displayTeam, setDisplayTeam] = useState(false);

  function deleteCharacter(index) {
    const team = JSON.parse(localStorage.getItem('team'));
    team.splice(index, 1);
    setTeamHeroes(team);
    localStorage.setItem('team', JSON.stringify(team));
  }

  async function getHeroes(team) {
    return await Promise.all(
      team.map(async function (characterId) {
        const response = await fetch(`${url}${characterId}`).catch((err) =>
          alert(err.message)
        );
        if (response.ok) {
          return response.json();
        }
      })
    );
  }

  useEffect(() => {
    async function getTeam() {
      const team = JSON.parse(localStorage.getItem('team')) || [];
      const heroesData = await getHeroes(team);
      setTeamHeroes(heroesData);
      setDisplayTeam(true);
    }
    getTeam();
    // eslint-disable-next-line
  }, [displayTeam]);

  return (
    <>
      <div className='columns is-desktop is-multiline '>
        <div className='column is-full'>
          <AverageSummary teamHeroes={teamHeroes} />
        </div>
        {displayTeam ? (
          teamHeroes.map((character, i) => {
            if (character.response === 'error') {
              return (
                <div className='column is-3 ' key={i}>
                  <div className='notification is-danger'>
                    <button
                      onClick={() => deleteCharacter(i)}
                      className='delete'
                    ></button>
                    There was an error. The character had an {character.error}
                  </div>
                </div>
              );
            }
            return (
              <div className='column is-3 ' key={i}>
                <Card
                  character={character}
                  setTeamHeroes={setTeamHeroes}
                  setDisplayTeam={setDisplayTeam}
                />
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
        <Footer teamHeroes={teamHeroes} />
      </div>
    </>
  );
}

export default Home;
