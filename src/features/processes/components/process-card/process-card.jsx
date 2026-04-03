import Card from '@/components/ui/card';
import MutedText from '@/components/ui/muted-text';

import ProcessCardContent from '../process-card-content';
import ProcessCardFooter from '../process-card-footer';

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
        <h1>{name}</h1>
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
