import React from 'react';
import { render } from '@testing-library/react';
import Test from '../Test';

describe('<Test />', () => {
  it('should render', () => {
    const { container } = render(<Test />);
    expect(container).toBeInTheDocument();
  })
})