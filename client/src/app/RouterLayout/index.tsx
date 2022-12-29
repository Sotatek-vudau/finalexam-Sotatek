import React from 'react';
import {Route ,Navigate} from "react-router-dom";
import { JsxElement } from 'typescript';
import HomePage from '../pages/HomePage';
import SignIn from '../pages/SignIn';

interface propsRouterLayout {
   component: React.Component;
}

export default function RouterLayer({component } : propsRouterLayout) {
   const acessToken= false;
  
   return acessToken? (
    {component}
  ) : (
    <Navigate
      to="/signin"
      replace
      state={<SignIn />}
    />
  )
}
