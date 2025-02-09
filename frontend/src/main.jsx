import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import 'C:/Users/HP/OneDrive/Desktop/MovieRecs/frontend/src/css/index.css';
import App from 'C:/Users/HP/OneDrive/Desktop/MovieRecs/frontend/src/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
    <App />
    </BrowserRouter>
  </StrictMode>,
)
