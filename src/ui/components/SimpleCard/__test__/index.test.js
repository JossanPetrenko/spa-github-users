import React from 'react';
import {render} from '@testing-library/react';

import SimpleCard from '../index';

describe('# SimpleCard', () => {
  test('Must render SimpleCard component and compare changes', () => {
    const tree = render(<SimpleCard />);
    expect(tree).toMatchSnapshot();
  });
});
