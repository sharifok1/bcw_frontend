import { Route, Routes } from 'react-router-dom';
import HomePage from './AllPages/HomePage/HomePage';
import './App.css';
import WebServices from './AllPages/WebServices/WebServices';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/webService' element={<WebServices/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
