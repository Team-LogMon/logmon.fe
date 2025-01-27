import './App.css';
import './shared/css/hideScrollbar.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { LandingPage } from '@/page/LandingPage.tsx';
import { LoginPage } from '@/page/LoginPage.tsx';
import { ProjectsPage } from '@/page/ProjectsPage.tsx';
import { DashboardPage } from '@/page/DashboardPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/projects'} element={<ProjectsPage />} />
        <Route path={'/dashboard/:projectId'} element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
