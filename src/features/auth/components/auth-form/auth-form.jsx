import clsx from 'clsx';
import { IoLogInOutline } from 'react-icons/io5';

import Button from '@/components/ui/button/button';
import Card from '@/components/ui/card/card';
import { Field } from '@/components/ui/field/field';
import IconContainer from '@/components/ui/icon-container/icon-container';

import { useLoginForm } from '../../hooks/useLoginForm';
import * as styles from './auth-form.module.css';

export default function AuthForm() {
  const { isLoading, handleSubmit, handleInputChange, formData, errorMessage } =
    useLoginForm();
  const isError = errorMessage !== null;

  const formClasses = clsx(styles.form, {
    [styles.loading]: isLoading,
  });

  return (
    <Card className={styles.card}>
      <form onSubmit={handleSubmit} className={formClasses}>
        <h1>Login</h1>

        <div className={styles.fields}>
          <Field
            id="name"
            name="username"
            label="Name"
            value={formData.username}
            onChange={handleInputChange}
            type="text"
            required
            isError={isError}
          />
          <Field
            id="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleInputChange}
            type="password"
            required
            isError={isError}
          />
          <div
            role="alert"
            className={clsx(styles.errorMessage, { [styles.visible]: isError })}
          >
            {errorMessage}
          </div>
        </div>

        <Button>
          <IconContainer>
            <IoLogInOutline />
          </IconContainer>
          <span>Login</span>
        </Button>
      </form>
    </Card>
  );
}
