import { IoLogInOutline } from 'react-icons/io5';

import Button from '@/components/ui/button/button';
import IconContainer from '@/components/ui/icon-container/icon-container';

export default function LoginButton() {
  return (
    <Button variant="transparent">
      <IconContainer>
        <IoLogInOutline />
      </IconContainer>
      <span>Login</span>
    </Button>
  );
}
