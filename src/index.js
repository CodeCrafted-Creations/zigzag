import React from 'react';
import { createRoot } from 'react-dom/client';
import ZigzagServiceSection from './ZigzagServiceSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Assuming you have a global CSS file

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ZigzagServiceSection />
  </React.StrictMode>
);
