import './App.css';
import './shared/css/hideScrollbar.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { LandingPage } from '@/pages/LandingPage.tsx';
import { LoginPage } from '@/pages/LoginPage.tsx';
import { ProjectsPage } from '@/pages/ProjectsPage.tsx';
import { DashboardPage } from '@/pages/DashboardPage.tsx';
import { CreateProjectFunnel } from '@/pages/createProjectPages/CreateProjectFunnel.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/projects'} element={<ProjectsPage />} />
        <Route path={'/projects/create'} element={<CreateProjectFunnel />} />
        <Route path={'/dashboard/:projectId'} element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
