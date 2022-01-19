import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Game } from './pages/Game';
import { Layout } from './layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="game" element={<Game />} />
      </Route>
    </Routes>
  );
}
