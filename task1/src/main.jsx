
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GameProvider } from './components/context/GameContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);
