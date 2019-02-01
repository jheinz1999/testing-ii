import React from 'react';

export default function Display({ balls, strikes }) {

  return (

    <div className='display'>

      <h2>Balls: {balls}</h2>
      <h2>Strikes: {strikes}</h2>

    </div>

  );

}
