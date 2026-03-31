import { useSelector } from 'react-redux';

import { selectCurrentUser } from '@/features/auth/auth-slice.js';

import { useGetMeQuery } from '../api.js';

export default function HomeRoute() {
  const user = useSelector(selectCurrentUser);
  const { data, isLoading, isFetching } = useGetMeQuery();
  const isPending = isLoading || isFetching;

  return (
    <>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{isPending ? 'loading' : JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
