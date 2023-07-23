import { Route, Routes } from 'react-router-dom';
import HomePage from './AllPages/HomePage/HomePage';
import './App.css';
import WebServices from './AllPages/WebServices/WebServices';
import ArchitecService from './AllPages/ArchitecService/ArchitecService';
import GraphicsService from './AllPages/GraphicsService/GraphicsService';
import ServiceDetails from './AllPages/ServiceDetails/ServiceDetails';
import UxUiService from './AllPages/UxUiService/UxUiService';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/webService' element={<WebServices/>}/>
        <Route path='/architecService' element={<ArchitecService/>}/>
        <Route path='/graphicsService' element={<GraphicsService/>}/>
        <Route path='/uxUiService' element={<UxUiService/>}/>
        <Route path='/serviceDetails' element={<ServiceDetails/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
