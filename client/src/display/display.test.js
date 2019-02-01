import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './index';

describe('display component', () => {

  it('will display ball and strike counts', () => {

    const { getByText } = render(<Display balls="2" strikes="2" />);

    const balls = getByText(/balls/i);
    const strikes = getByText(/strikes/i);

    expect(balls).not.toBe(null);
    expect(strikes).not.toBe(null);

  });

});
