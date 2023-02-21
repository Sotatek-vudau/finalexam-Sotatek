import './App.css';
import SignIn from './app/pages/SignIn';
import SignUp from './app/pages/SignUp';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './app/pages/HomePage';
import ForgotPassword from './app/pages/FogotPassword';
import CreateProfile from './app/pages/CreateProfile';
import { createContext, useState, useEffect } from 'react';
import Error from './app/pages/Error';


export const DataContext = createContext<any>(null);


function App() {
  const [dataUser, setDataUser] = useState<any>();
  useEffect(()=>{
      const dataLocal= localStorage.getItem("User");
      if(dataLocal){
        const data1 = JSON.parse(dataLocal);
        setDataUser(data1);
      }
  },[]);

  return (
    <DataContext.Provider value ={{ dataUser, setDataUser}}>
      <div className="App">
        <Routes>
          <Route path='/' element={
              localStorage.getItem("accessToken") ? <HomePage /> : <Navigate to="/signin" />
          } />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='createprofile' element={<CreateProfile />} />
          <Route path='forgotPassword' element={<ForgotPassword />}/>
          <Route path='*' element={<Error />} />
        </Routes>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            limit={5}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </div>
    </DataContext.Provider>
    
  );
}

export default App;






