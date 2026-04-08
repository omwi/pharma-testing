import { rateToStr, shortenNumber } from '@/utils/string';

import Card from '../card/card';
import MutedText from '../muted-text/muted-text';
import Tag from '../tag/tag';
import * as styles from './chart-card.module.css';

export default function ChartCard({ children, title, subTitle, total, rate }) {
  return (
    <Card className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.heading}>
          <span>{title}</span>
          {total && <span>{shortenNumber(total)}</span>}
        </h3>
        <p className={styles.subTitle}>
          <MutedText as="span">{subTitle}</MutedText>
          {rate && <Tag className={styles.rate} text={rateToStr(rate)} />}
        </p>
      </header>
      <div className={styles.content}>{children}</div>
    </Card>
  );
}
