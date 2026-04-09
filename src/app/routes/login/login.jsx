import AuthForm from '@/features/auth/components/auth-form/auth-form';

import * as styles from './login.module.css';

export default function LoginRoute() {
  return (
    <div className={styles.container}>
      <AuthForm />
    </div>
  );
}
