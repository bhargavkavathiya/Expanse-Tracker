import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContainer from './MainContainer/MainContainer';
import './App.css';
import { useEffect, useState } from 'react';
import SignUp from './FrontPage/SignUp';
import FrontPage from './FrontPage/FrontPage';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [auth, setAuth] = useState(localStorage.getItem('user'));
  // useEffect(() => {
  //   const User=localStorage.getItem('user');
  //   if(User){
  //     setAuth('true');
  //   }
  // }, [])

  return (
    <>
      <ToastContainer/>
        <BrowserRouter>
          {
            auth ? <>
              <MainContainer setAuth={setAuth} />
            </> : <FrontPage setAuth={setAuth} />
          }
        </BrowserRouter>
    </>
  );
}

export default App;
