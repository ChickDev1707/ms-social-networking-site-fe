import React, { ReactElement } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import PrivateRoute from './components/ControlRoute/PrivateRoute';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import AuthRoute from './components/ControlRoute/AuthRoute';
import RegisterPage from './pages/Register/RegisterPage';
import IndexChat from './pages/Chat';
import NewPostPage from './pages/NewPost/NewPostPage';
import UserPage from './pages/User/UserPage';

function App (): ReactElement {
  return (
    <div className="App">
      <Routes>
        {/* Home */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Routes>
                <Route index element={<HomePage />}></Route>
              </Routes>
            </PrivateRoute>
          }></Route>

        <Route path="/user/:id" element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        }></Route>

        {/* Chat */}
        <Route
          path="/messenger/*"
          element={
            <PrivateRoute>
              <IndexChat />
            </PrivateRoute>
          }></Route>

        {/* New post */}
        <Route path="/new/*" element={
          <PrivateRoute>
            <NewPostPage />
          </PrivateRoute>}>
        </Route>

        {/* Auth */}
        <Route
          path="/login/*"
          element={
            <AuthRoute>
              <Routes>
                <Route index element={<LoginPage />} />
              </Routes>
            </AuthRoute>
          }></Route>

        <Route
          path="/register/*"
          element={
            <AuthRoute>
              <Routes>
                <Route index element={<RegisterPage />} />
              </Routes>
            </AuthRoute>
          }></Route>
      </Routes>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
