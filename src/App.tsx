import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { LandingPage } from '@/page/LandingPage.tsx';
import { LoginPage } from '@/page/LoginPage.tsx';
import { ProjectsPage } from '@/page/ProjectsPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/projects'} element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
