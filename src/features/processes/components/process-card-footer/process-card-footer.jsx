import { IoCalendarClearOutline } from 'react-icons/io5';

import Button from '@/components/ui/button';
import IconContainer from '@/components/ui/icon-container';

import * as styles from './process-card-footer.module.css';

export default function ProcessCardFooter() {
  return (
    <footer className={styles.cardFooter}>
      <Button className={styles.button}>Start Process</Button>

      <Button variant="secondary" className={styles.button}>
        <IconContainer>
          <IoCalendarClearOutline />
        </IconContainer>
        <span>Add to Calendar</span>
      </Button>
    </footer>
  );
}
