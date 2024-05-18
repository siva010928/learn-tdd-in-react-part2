import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';
import { fireEvent, render } from '@testing-library/react';

describe('Counter Component', () => {
  it('should render counter value', () => {
    const counter = shallow(<Counter />);
    const counterValue = counter.find(Text);
    expect(counterValue).toBeDefined();
    
  });

  it('should equal to 0 initially', () => {
    const component = render(<Counter />);
    expect(component.getByTestId('Counter')).toHaveTextContent(0)
  });

  it('should be able to increment', () => {
    const {getByTestId} = render(<Counter />);
    expect(getByTestId('up-button')).not.toHaveAttribute('disabled')
  });

  it('should be able to decrement', () => {
    const {getByTestId} = render(<Counter />);
    expect(getByTestId('down-button')).not.toHaveAttribute('disabled')
  });
});


describe("Testing counter functionality", () => {
    it("increments the count when Increment button is pressed", () => {
        const {getByTestId} = render(<Counter />);
        fireEvent.click(getByTestId('up-button'));
        expect(getByTestId('Counter')).toHaveTextContent('1');
    })

    it("decrements the count when Decrement button is pressed", () => {
        const {getByTestId} = render(<Counter />);
        fireEvent.click(getByTestId('down-button'));
        expect(getByTestId('Counter')).toHaveTextContent('-1');
    })
})