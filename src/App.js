import HomePage from './HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <HomePage />
        <MainContainer>
        <Routes>
          <Route path='/' element={<h1>DEMO</h1>} />
          <Route path='/home' element={<Sidebar/>} />
        </Routes>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
