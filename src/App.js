import { Route, Routes } from 'react-router-dom';
import HomePage from './AllPages/HomePage/HomePage';
import './App.css';
import WebServices from './AllPages/WebServices/WebServices';
import ArchitecService from './AllPages/ArchitecService/ArchitecService';
import GraphicsService from './AllPages/GraphicsService/GraphicsService';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/webService' element={<WebServices/>}/>
        <Route path='/architecService' element={<ArchitecService/>}/>
        <Route path='/graphicsService' element={<GraphicsService/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
