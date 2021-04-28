import React from 'react';
import heroesfaces from '../images/heroes-faces.PNG';
import '../styles/Login.css';

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className='box login p-5' onSubmit={handleSubmit}>
      <figure className='image is-3by1'>
        <img src={heroesfaces} alt='principal DC hero faces' />
      </figure>
      <p className='title is-3 is-spaced control pt-3'>
        The More Superheroes The Better.
      </p>
      <div className='field py-3'>
        <p className='control'>
          <input className='input' type='email' placeholder='Email' required />
        </p>
      </div>
      <div className='field py-3'>
        <p className='control'>
          <input
            className='input'
            type='password'
            placeholder='Password'
            required
          />
        </p>
      </div>
      <div className='field py-3'>
        <p className='control'>
          <button type='submit' className='button is-link is-fullwidth'>
            Login
          </button>
        </p>
      </div>
    </form>
  );
}
export default Login;
