import Card from '@/components/ui/card/card';
import MutedText from '@/components/ui/muted-text/muted-text';

import ProcessCardContent from '../process-card-content/process-card-content';
import ProcessCardFooter from '../process-card-footer/process-card-footer';
import * as styles from './process-card.module.css';

export default function ProcessCard({
  name,
  location,
  startDate,
  endDate,
  address,
}) {
  return (
    <Card>
      <header>
        <h1 className={styles.heading}>{name}</h1>
        <MutedText>{location}</MutedText>
      </header>

      <ProcessCardContent
        startDate={startDate}
        endDate={endDate}
        address={address}
      />

      <ProcessCardFooter />
    </Card>
  );
}
