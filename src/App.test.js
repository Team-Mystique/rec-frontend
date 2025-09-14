import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Simple test to ensure app can be imported and rendered without errors
test('App component can be imported and rendered', () => {
  // App component already includes BrowserRouter, so we can render it directly
  render(<App />);
  
  // If we reach this point, the component rendered successfully
  expect(true).toBe(true);
});
