import { LoginButtonLayout } from '@/pages/LoginPage/components/LoginButtonLayout.tsx';
import logo from '@/shared/assets/login/apple-logo.png';

export const AppleLoginButton = () => {
  return <LoginButtonLayout provider={'Apple'} image={logo} disabled={true} />;
};
