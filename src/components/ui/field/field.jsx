import clsx from 'clsx';

import * as styles from './field.module.css';

export function Field({
  id,
  name,
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  required = false,
  isError = false,
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        className={clsx(styles.input, { [styles.error]: isError })}
      />
    </div>
  );
}
