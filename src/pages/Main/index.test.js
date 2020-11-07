import React from 'react';

import { render } from '@/utils/test-utils';
import Main from './index';

it('renders Main without crashing', () => {
  const div = document.createElement('div');
  render(<Main />, div);
});

it('renders Main with snapshot', () => {
  const { asFragment } = render(<Main />);
  expect(asFragment()).toMatchSnapshot();
});
