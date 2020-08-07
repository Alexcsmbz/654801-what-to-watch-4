import * as React from 'react';
import * as renderer from 'react-test-renderer';

declare global {
  const React: typeof React;
  const renderer: typeof renderer;
}
