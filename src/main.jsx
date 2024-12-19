import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' ;
import { DataProvider } from './context/DataContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
    <DataProvider>
      <App />
    </DataProvider>
     
    </BrowserRouter>
   
  </StrictMode>,
)
