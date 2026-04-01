import defaultAvatar from '@/assets/default-avatar.png';

import * as styles from './avatar.module.css';

export default function Avatar({ src, alt, size = 40 }) {
  function handleLoadError(e) {
    console.warn('Failed to load avatar', e);
    e.target.onerror = null;
    e.target.src = defaultAvatar;
  }

  return (
    <img
      className={styles.avatar}
      src={src ?? defaultAvatar}
      alt={alt}
      width={size}
      height={size}
      onError={handleLoadError}
    />
  );
}
