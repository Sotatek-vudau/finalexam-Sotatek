import './App.css';
import SignIn from './app/pages/SignIn';
import SignUp from './app/pages/SingUp';
import RouterLayer from './app/RouterLayout';
import { Routes ,Route } from 'react-router-dom';
import LayoutSignIn from './layout/LayoutSignIn';
import HomePage from './app/pages/HomePage';


function App() {
  return (
    <div className="App">
      {/* <Routes> */}
        {/* <RouterLayer component={<SignIn />}/> */}
        {/* <Route path='signup' element={<SignUp />}/> */}
        {/* <SignUp /> */}
      {/* </Routes> */}
      {/* <LayoutSignIn>
          <SignIn />
      </LayoutSignIn> */}
      {/* <HomePage /> */}
      {/* <RouterLayer
          component={HomePage}
        /> */}
    </div>
  );
}

export default App;






