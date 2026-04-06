import IconContainer from '@/components/ui/icon-container/icon-container';
import MutedText from '@/components/ui/muted-text/muted-text';

import * as styles from './manufacturer.module.css';

export default function Manufacturer({ manufacturer }) {
  return (
    <span className={styles.container}>
      <IconContainer size={40} className={styles.logo} />
      <MutedText>{manufacturer}</MutedText>
    </span>
  );
}
