import logo from '@/shared/assets/login/google4848.png';
import { LoginButtonLayout } from '@/pages/LoginPage/components/LoginButtonLayout.tsx';

export const GoogleLoginButton = () => {
  return (
    <LoginButtonLayout provider={'Google'} image={logo} disabled={false} />
  );
};
