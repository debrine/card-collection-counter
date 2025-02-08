import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './containers/Authentication/pages/Login';
import Register from './containers/Authentication/pages/Register';
import CollectionsPage from './containers/Collections/pages/CollectionsPage';
import SetsPage from './containers/Sets/SetsPage';
import CardsPage from './containers/Cards/pages/CardsPage';

type Props = {};

export default function AppRoutes({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/' element={<CollectionsPage />} />
        <Route path='/collection/:collectibleID' element={<SetsPage />} />
        <Route
          path='/collection/:collectibleID/cards'
          element={<CardsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
