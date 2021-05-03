import React, { useState, useEffect } from 'react';
import imageNotFound from '../images/image-not-found.jpg';

function Results({ name, image, id, url }) {
  const [currentCharacter, setCurrentCharacter] = useState({});
  const [isAdded, setIsAdded] = useState(false);

  async function getCharacter(characterId) {
    const response = await fetch(`${url}${characterId}`).catch((err) =>
      alert(err.message)
    );
    if (response.ok) {
      return response.json();
    }
  }

  function checkCharacter(currentTeam) {
    let good = 0;
    let bad = 0;
    let exists = false;
    if (currentTeam.length < 6) {
      currentTeam.forEach((obj) => {
        obj.alignment === 'good' ? good++ : bad++;
        if (obj.id === currentCharacter.id) {
          exists = true;
        }
      });
      if (!exists) {
        if (currentCharacter.biography.alignment === 'good' && good > 2) {
          alert('You can only have 3 heroes');
          return false;
        } else if (currentCharacter.biography.alignment === 'bad' && bad > 2) {
          alert('You can only have 3 villans');
          return false;
        }
        return true;
      }
      alert('Character already on your team');
    }
    alert('You cannot have more than 6 characters on your team');
    return false;
  }

  function addCharacter() {
    const currentTeam = localStorage.getItem('myTeam')
      ? JSON.parse(localStorage.getItem('myTeam'))
      : [];
    if (checkCharacter(currentTeam)) {
      currentTeam.push(currentCharacter);
      localStorage.setItem('myTeam', JSON.stringify(currentTeam));
      setIsAdded(true);
    }
  }

  useEffect(() => {
    async function getCurrentData() {
      const currentHero = await getCharacter(id);
      setCurrentCharacter(currentHero);
      const currentTeam = localStorage.getItem('myTeam')
        ? JSON.parse(localStorage.getItem('myTeam'))
        : [];
      currentTeam.forEach((obj) => {
        if (obj.id === currentHero.id) {
          setIsAdded(true);
        }
      });
    }
    getCurrentData();
    // eslint-disable-next-line
  }, [isAdded]);

  return (
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title subtitle is-5 is-uppercase has-text-weight-semibold'>
          {name}
        </p>
      </header>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img
            src={image}
            alt={name}
            onError={(e) => (e.target.src = imageNotFound)}
          />
        </figure>
      </div>
      <footer className='card-footer'>
        <button
          onClick={addCharacter}
          className={
            !isAdded
              ? 'card-footer-item button is-light is-link'
              : 'card-footer-item button is-link'
          }
        >
          {!isAdded ? 'Add to your Team' : 'Already on your team'}
        </button>
      </footer>
    </div>
  );
}
export default Results;
