import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { WishesPage } from './pages/Wishes';
import { GamePage } from './pages/Game';
import { Layout } from './layout';
import { SpheresPage } from './pages/Spheres';
import { InfoPage } from './pages/Info';
import { Endpoint } from './utils/endpoints';

export default function App() {
  return (
    <Routes>
      <Route path={Endpoint.Root} element={<Layout />}>
        <Route index element={<Navigate to={Endpoint.Wishes} />} />
        <Route path={Endpoint.Wishes} element={<WishesPage />} />
        <Route path={Endpoint.Spheres} element={<SpheresPage />} />
        <Route path={Endpoint.Game} element={<GamePage />} />
        <Route path={Endpoint.Info} element={<InfoPage />} />
      </Route>
    </Routes>
  );
}
