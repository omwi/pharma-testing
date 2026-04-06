import clsx from 'clsx';

import Card from '../card/card';
import IconContainer from '../icon-container/icon-container';
import * as styles from './info-card.module.css';

export default function InfoCard({ children, icon, title, className }) {
  return (
    <Card className={clsx(styles.infoCard, className)}>
      <header>
        <IconContainer size={40} className={styles.iconWrapper}>
          {icon}
        </IconContainer>
        <h3>{title}</h3>
      </header>
      {children}
    </Card>
  );
}
