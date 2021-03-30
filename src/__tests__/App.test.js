import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Calculator snapshot', () => {
  it('Renders the Calculator page', () => {
    const calculator = renderer
      .create(<App />)
      .toJSON();
    expect(calculator).toMatchSnapshot();
  });
});

describe('Calculator methods', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('it test add numbers', async () => {
    userEvent.click(screen.getByText('6'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('6'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('12');
    expect(display).toBeInTheDocument();
  });

  it('test to subtract numbers', async () => {
    userEvent.click(screen.getByText('6'));
    userEvent.click(screen.getByText('8'));
    userEvent.click(screen.getByText('-'));
    userEvent.click(screen.getByText('6'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('62');
    expect(display).toBeInTheDocument();
  });

  it('test to multiply numbers', async () => {
    userEvent.click(screen.getByText('6'));
    userEvent.click(screen.getByText('8'));
    userEvent.click(screen.getByText('*'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('136');
    expect(display).toBeInTheDocument();
  });

  it('test to divide numbers', async () => {
    userEvent.click(screen.getByText('6'));
    userEvent.click(screen.getByText('8'));
    userEvent.click(screen.getByText('/'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('34');
    expect(display).toBeInTheDocument();
  });

  it('test for decimal numbers', async () => {
    userEvent.click(screen.getByText('6'));
    userEvent.click(screen.getByText('.'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('6.2');
    expect(display).toBeInTheDocument();
  });
});
