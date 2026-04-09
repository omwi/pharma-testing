import { IoLogOutOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import { api } from '@/app/api';
import Button from '@/components/ui/button/button';
import IconContainer from '@/components/ui/icon-container/icon-container';

import { loggedOut } from '../../auth-slice';

export default function LogoutButton() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(loggedOut());
    dispatch(api.util.resetApiState());
  }

  return (
    <Button variant="transparent" onClick={handleLogout}>
      <IconContainer>
        <IoLogOutOutline />
      </IconContainer>
      <span>Logout</span>
    </Button>
  );
}
