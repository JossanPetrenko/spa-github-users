import React, {useContext as useContextMock} from 'react';

import {render} from '@testing-library/react';

import User from '../index';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

describe('# User', () => {
  beforeEach(() => {
    useContextMock.mockImplementation(() => [null, jest.fn()]);
  });

  // TODO
  test('Must render User component and compare changes', () => {
    // const tree = render(<User />);
    // expect(tree).toMatchSnapshot();
  });
});
