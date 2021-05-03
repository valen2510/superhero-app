import React from 'react';

function Footer({ teamHeroes }) {
  return (
    <footer
      className={
        teamHeroes && teamHeroes.length === 0 ? 'bottom footer' : 'footer'
      }
    >
      <div className='content has-text-centered'>
        <p>
          <strong>SuperHero app</strong> por{' '}
          <a
            rel='noreferrer'
            href='https://www.linkedin.com/in/valenjaramillo/'
            target='_blank'
          >
            Valentina Jaramillo
          </a>{' '}
          © 2021.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
