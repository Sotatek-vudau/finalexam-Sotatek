import './App.css';
import SignIn from './app/pages/SignIn';
import SignUp from './app/pages/SingUp';
import RouterLayer from './app/RouterLayout';
import { Routes, Route } from 'react-router-dom';
import LayoutSignIn from './layout/LayoutSignIn';
import HomePage from './app/pages/HomePage';
import EditProfile from './app/components/EditProfile';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;






