import React from 'react';

function Card({ image, powerstats, name }) {
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src={image.url} alt='Hero' />
        </figure>
      </div>
      <div className='card-content mx-3 p-0 pt-2'>
        <div className='content is-small'>
          <div className='subtitle is-size-5 ml-5'>{name}</div>
          <table className='table is-narrow'>
            <tbody>
              <tr>
                <th>Intelligence</th>
                <td>{powerstats.intelligence}</td>
              </tr>
              <tr>
                <th>Power</th>
                <td>{powerstats.power}</td>
              </tr>
              <tr>
                <th>Combat</th>
                <td>{powerstats.combat}</td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>{powerstats.speed}</td>
              </tr>
              <tr>
                <th>Strength</th>
                <td>{powerstats.strength}</td>
              </tr>
              <tr>
                <th>Durability</th>
                <td>{powerstats.durability}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer className='card-footer'>
        <a href='#' className='card-footer-item'>
          Detalles
        </a>
        <a href='#' className='card-footer-item'>
          Eliminar
        </a>
      </footer>
    </div>
  );
}

export default Card;
