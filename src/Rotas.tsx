import React from 'react';
import App from './pages/Home';
import {  
  Route,
  Routes
} from 'react-router-dom';
import { Login } from './pages/Login'
import { CriaNoticias } from './pages/CriaNoticias'

export const Rotas: React.FC = () => {
  return (
    <>
    <Routes>
      <Route path="/" element = {<App />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/criaNoticias" element={<CriaNoticias />} />
    </Routes>
    </>
  )
}
