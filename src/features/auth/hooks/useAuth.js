import { useSelector } from 'react-redux';

import { selectCurrentUser } from '@/features/auth/auth-slice';

export const useAuth = () => {
  return useSelector(selectCurrentUser);
};
