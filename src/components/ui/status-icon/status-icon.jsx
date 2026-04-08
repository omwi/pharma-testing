import clsx from 'clsx';
import { IoCheckmarkOutline, IoCloseOutline } from 'react-icons/io5';

import IconContainer from '../icon-container/icon-container';
import * as styles from './status-icon.module.css';

export default function StatusIcon({ isSuccess }) {
  return (
    <IconContainer
      size={28}
      className={clsx(styles.icon, {
        [styles.success]: isSuccess,
        [styles.failure]: !isSuccess,
      })}
    >
      {isSuccess ? <IoCheckmarkOutline /> : <IoCloseOutline />}
    </IconContainer>
  );
}
