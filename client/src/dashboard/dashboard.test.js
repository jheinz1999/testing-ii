import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './index';

describe('dashboard component', () => {

  it('will display ball and strike counts', () => {

    const { getTestById } = render(<Dashboard />);

    const balls = getTestById('balls');
    const strikes = getTestById('strikes');

    expect(balls).toHaveTextContent();
    expect(strikes).toHaveTextContent();

  });

  it('resets strikes and balls to zero if balls = 4 or strikes = 3', () => {



  });

  it('resets strikes and balls to zero if there is a hit', () => {



  });

  it('will be updated when user records activity on dashboard', () => {



  });

});
