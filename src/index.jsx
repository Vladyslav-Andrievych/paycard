import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

import './index.scss';

const container = document.querySelector('#container');
const root = createRoot(container);

root.render(<App />);
