// import necessary react testing library helpers here
import React from "react";
// import the Counter component here
import Counter from '../components/Counter';
import { render, fireEvent, screen} from "@testing-library/react";


beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const message = screen.getByText("Counter");
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId("count");
  expect(initialCount.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementB = screen.getByText("+");
  fireEvent.click(incrementB);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementB = screen.getByText("-");
  fireEvent.click(decrementB);

  const count = screen.getByTestId("count");
  expect(count.textContent).toBe("-1");
});
