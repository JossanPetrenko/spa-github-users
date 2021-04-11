import React, {useContext as useContextMock} from 'react';
import {render, fireEvent} from '@testing-library/react';
import githubContext from 'context/github/githubContext';

import UserSearch from '../index';

jest.mock('../../../../context/github/githubContext', () => jest.fn({}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

describe('# UserSearch', () => {
  beforeEach(() => {
    useContextMock.mockImplementation(() => githubContext);
  });
  // TODO
  test('Must render UserSearch component and compare changes', () => {
    // const tree = render(<UserSearch />);
    // expect(tree).toMatchSnapshot();
  });

  // test('Must click clear button on UserSearch component', () => {
  //   const {getByTestId} = render(<UserSearch />);
  //   const button = getByTestId('clear');
  //   fireEvent.press(button);
  // });
});
