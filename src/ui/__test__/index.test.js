import {render, screen} from '@testing-library/react';
import App from '../';

import strings from 'infra/resources/strings';

test('# App', () => {
  render(<App />);
  const linkElement = screen.getByText(strings.app.name);
  expect(linkElement).toBeInTheDocument();
});
