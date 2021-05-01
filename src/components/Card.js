import React from 'react';

function Card({ image, powerstats, name, isFlipped }) {
  function colorStat(stat) {
    if (stat > 49) {
      return 'tag is-success';
    }
    return 'tag is-danger';
  }

  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src={image.url} alt='Hero' />
        </figure>
      </div>
      <div className='card-content mx-3 p-0 pt-2'>
        <div className='content is-small'>
          <div className='subtitle is-5 mb-3 is-uppercase has-text-weight-semibold '>
            {name}
          </div>
          <table className='table is-narrow'>
            <tbody>
              <tr>
                <th>Intelligence</th>
                <td>
                  <span className={colorStat(powerstats.intelligence)}>
                    {powerstats.intelligence}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Power</th>
                <td>
                  <span className={colorStat(powerstats.power)}>
                    {powerstats.power}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Combat</th>
                <td>
                  <span className={colorStat(powerstats.combat)}>
                    {powerstats.combat}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>
                  <span className={colorStat(powerstats.speed)}>
                    {powerstats.speed}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Strength</th>
                <td>
                  <span className={colorStat(powerstats.strength)}>
                    {powerstats.strength}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Durability</th>
                <td>
                  <span className={colorStat(powerstats.durability)}>
                    {powerstats.durability}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer className='card-footer'>
        <button
          onClick={() => isFlipped(false)}
          className='card-footer-item button is-light is-link '
        >
          Details
        </button>
        <button className='card-footer-item button is-light is-link '>
          Delete
        </button>
      </footer>
    </div>
  );
}
export default Card;
