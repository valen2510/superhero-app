import React, { useState, useEffect } from 'react';

function AverageSummary({ teamHeroes }) {
  const [teamSum, setTeamSum] = useState({});
  const [teamCategory, setTeamCategory] = useState(null);

  useEffect(() => {
    let max = 0;
    let maxKey = '';
    const objSum = teamHeroes.reduce((acc, obj) => {
      for (const key in obj.powerstats) {
        let value = Number.parseInt(obj.powerstats[key]) || 0;
        acc[key] = (acc[key] || 0) + value;
      }
      for (const key in obj.appearance) {
        if (key === 'weight' || key === 'height') {
          let value = obj.appearance[key][1].split(' ', 1);
          acc[key] = (acc[key] || 0) + Number.parseInt(value[0]);
        }
      }
      return acc;
    }, {});
    setTeamSum(objSum);
    for (const [key, value] of Object.entries(objSum)) {
      if (value > max && key !== 'weight' && key !== 'height') {
        max = value;
        maxKey = key;
      }
    }
    setTeamCategory(maxKey.toUpperCase());
  }, [teamHeroes]);

  return (
    <>
      <div className='tags has-addons mb-0 is-justify-content-center'>
        <span className='tag is-dark'>Team Category</span>
        <span className='tag is-link'>{teamCategory}</span>
      </div>
      <div className='level has-text-info has-background-info-light mb-5'>
        {teamSum !== {}
          ? Object.keys(teamSum).map((key, i) => {
              return (
                <div className='level-item has-text-centered m-2' key={i}>
                  <div className='div'>
                    <p className='heading'>
                      {key === 'weight' || key === 'height'
                        ? `${key} Average`
                        : `Total ${key}`}
                    </p>
                    <p className='title'>
                      {key === 'weight' || key === 'height'
                        ? (teamSum[key] / teamHeroes.length).toFixed()
                        : teamSum[key]}
                    </p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default AverageSummary;
