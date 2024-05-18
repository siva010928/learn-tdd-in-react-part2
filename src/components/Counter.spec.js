import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';
import { render } from '@testing-library/react';

describe('Counter Component', () => {
  it('should render counter value', () => {
    const counter = shallow(<Counter />);
    const counterValue = counter.find(Text);
    expect(counterValue).toBeDefined();
    
  });

  it('should equal to 0 initially', () => {
    const component = render(<Counter />);
    expect(component.getByTestId('counter')).toHaveTextContent(0)
  });

  it('should be able to increment', () => {
    const {getByTestId} = render(<Counter />);
    expect(getByTestId('up-button')).not.toHaveAttribute('disabled')
  });

  it('should be unable to decrement', () => {
    const {getByTestId} = render(<Counter />);
    expect(getByTestId('down-button')).toHaveAttribute('disabled')
  });
});
