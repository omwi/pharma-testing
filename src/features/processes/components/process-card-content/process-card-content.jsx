import { TZDate } from '@date-fns/tz';
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5';

import DateRange from '@/components/ui/date-range/date-range';
import Divider from '@/components/ui/divider/divider';
import InfoCard from '@/components/ui/info-card/info-card';
import MutedText from '@/components/ui/muted-text/muted-text';
import TimeRange from '@/components/ui/time-range/time-range';
import { addressToString } from '@/utils/address';
import { TIME_ZONE } from '@/utils/date';

import * as styles from './process-card-content.module.css';

export default function ProcessCardContent({ startDate, endDate, address }) {
  return (
    <div className={styles.infoCardsContainer}>
      <InfoCard
        className={styles.infoCard}
        icon={<IoLocationOutline />}
        title="Location"
      >
        <MutedText>
          {addressToString(address)}
          <br />
          {address.zip}
        </MutedText>
      </InfoCard>

      <Divider orientation="vertical" isPartial isResponsive />

      <InfoCard
        className={styles.infoCard}
        icon={<IoCalendarOutline />}
        title="Date & Time"
      >
        <MutedText>
          <DateRange
            from={new TZDate(startDate, TIME_ZONE)}
            to={new TZDate(endDate, TIME_ZONE)}
          />
          <br />
          <TimeRange
            from={new TZDate(startDate, TIME_ZONE)}
            to={new TZDate(endDate, TIME_ZONE)}
          />
        </MutedText>
      </InfoCard>
    </div>
  );
}
