import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import MainContainer from './MainContainer/MainContainer';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <MainContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
