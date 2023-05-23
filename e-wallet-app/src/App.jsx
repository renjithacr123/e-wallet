import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginAuth } from './pages/Login/LoginAuth';

export default function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<LoginAuth />} />
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem', textAlign: 'center' }}>
                  <h1>Page Not Found</h1>
                  <p>The page you are looking for doesn't exist</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}
