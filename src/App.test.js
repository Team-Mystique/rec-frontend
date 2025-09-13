import React from 'react';
import { render } from '@testing-library/react';

// Simple test to ensure app can be imported without errors
test('App component can be imported', () => {
  // Just verify that App can be imported without throwing
  const App = require('./App').default;
  expect(App).toBeDefined();
});
