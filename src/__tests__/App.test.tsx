import { render, screen, configure } from '@testing-library/react';
import App from '../App';

configure({testIdAttribute: 'id'});

describe('App.tsx Tests', () => {
  test('Renders 404 link', () => {
    render(<App />);
    const linkElement = screen.getByText(/404 link/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Renders primary text', () => {
    render(<App />);
    const textElement = screen.getByText(/A template for a new React project!/i);
    expect(textElement).toBeInTheDocument();
  });

  test('Renders BSS Logo', () => {
    render(<App />);
    const logoElement = screen.getByTestId("bsslogo");
    expect(logoElement).toBeInTheDocument();
  });
});

