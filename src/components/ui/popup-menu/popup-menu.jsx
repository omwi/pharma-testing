import clsx from 'clsx';
import { useEffect, useEffectEvent, useRef } from 'react';

import * as styles from './popup-menu.module.css';

export default function PopupMenu({ children, className, isOpen, toggle }) {
  const popupRef = useRef(null);

  const onOutsideClick = useEffectEvent((event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      toggle();
    }
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => onOutsideClick(event);

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div
      ref={popupRef}
      className={clsx(styles.popupMenu, className, {
        [styles.hidden]: !isOpen,
      })}
    >
      {children}
    </div>
  );
}
