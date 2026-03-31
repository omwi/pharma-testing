import { useSelector } from 'react-redux';

import { selectCurrentUser } from '@/features/auth/auth-slice.js';

export const useAuth = () => {
  return useSelector(selectCurrentUser);
};
