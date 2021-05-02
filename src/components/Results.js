import React, { useState } from 'react';

function Results({ name, image, id }) {
  const [team, setTeam] = useState(
    localStorage.getItem('team') ? JSON.parse(localStorage.getItem('team')) : []
  );

  function addCharacter() {
    if (!team.includes(id)) {
      team.push(id);
      localStorage.setItem('team', JSON.stringify(team));
      setTeam(JSON.parse(localStorage.getItem('team')));
    }
  }

  return (
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title subtitle is-5 is-uppercase has-text-weight-semibold'>
          {name}
        </p>
      </header>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src={image} alt={name} />
        </figure>
      </div>
      <footer className='card-footer'>
        <button
          onClick={addCharacter}
          className={
            !team.includes(id)
              ? 'card-footer-item button is-light is-link'
              : 'card-footer-item button is-link'
          }
        >
          {!team.includes(id) ? 'Add to your Team' : 'Already on your team'}
        </button>
      </footer>
    </div>
  );
}
export default Results;
