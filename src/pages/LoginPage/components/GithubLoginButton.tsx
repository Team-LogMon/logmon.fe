import { LoginButtonLayout } from '@/pages/LoginPage/components/LoginButtonLayout.tsx';
import logo from '@/shared/assets/login/github-logo.png';

export const GithubLoginButton = () => {
  return <LoginButtonLayout provider={'Github'} image={logo} disabled={true} />;
};
