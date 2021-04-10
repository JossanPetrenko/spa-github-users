import React from 'react';
import {render} from '@testing-library/react';

import AppHelmet from '../index';

describe('# AppHelmet', () => {
  test('Must render AppHelmet component and compare changes', () => {
    const tree = render(<AppHelmet />);
    expect(tree).toMatchSnapshot();
  });
});
