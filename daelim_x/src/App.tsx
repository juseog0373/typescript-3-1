import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Home from './screens/home';
import Profile from './screens/profile';
import SignInScreen from './screens/signin';
import SignUpScreen from './screens/signup';

// react-router-dom을 활용한 page 관리
const router = createBrowserRouter([{
  path: "/",
  children : [
    {
      path: "",
      element: <Home/>
    }, {
      path: "profile",
      element: <Profile/>
    }, {
      path: "/signin",
      element: <SignInScreen/>
    }, {
      path: "signup",
      element: <SignUpScreen/>
    }
  ]
}])

const Container = styled.div`
  background-color: olive;
  width: 100vm;
  height: 100vh;
`;

function App() {
  return (
    <Container className='App'>
      <RouterProvider router={router}></RouterProvider>
    </Container>
  );
}

export default App;
