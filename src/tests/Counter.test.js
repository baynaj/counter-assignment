import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = document.querySelector('h2');
  expect(counterMessage.textContent).toBe('Counter');
});

test('should render initial count with value of 0', () => {
  const count = document.querySelector('p');
  expect(count.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  const incrementButton = document.querySelector('button');
  fireEvent.click(incrementButton);
  const count = document.querySelector('p');
  expect(count.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = document.querySelectorAll('button')[1];
  fireEvent.click(decrementButton);
  const count = document.querySelector('p');
  expect(count.textContent).toBe('-1');
});
