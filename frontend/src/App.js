import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Rate from './Component/Rate';

//import NotFoundPage from './Pages/NotFoundPage';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Rate />} />
          
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
