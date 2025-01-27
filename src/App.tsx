import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { LandingPage } from '@/page/LandingPage.tsx';
import { LoginPage } from '@/page/LoginPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/login'} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
