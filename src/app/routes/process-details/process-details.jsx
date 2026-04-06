import { IoNavigateOutline } from 'react-icons/io5';

import Button from '@/components/ui/button/button';
import Container from '@/components/ui/container/container';
import Divider from '@/components/ui/divider/divider';
import IconContainer from '@/components/ui/icon-container/icon-container';
import MarkeredMap from '@/components/ui/markered-map/markered-map';
import Section from '@/components/ui/section/section';
import Manufacturer from '@/features/processes/components/manufacturer/manufacturer';
import ProcessCard from '@/features/processes/components/process-card/process-card';
import ProcessTagsContainer from '@/features/processes/components/process-tags-container/process-tags-container';

import * as styles from './process-details.module.css';

const process = {
  id: 1,
  name: 'Migracalm-X - New drug testing for chronic migraine',
  description:
    'We will be conducting clinical trials of the new drug "Migracalm-X," which is designed to treat acute forms of migraines. We are going to test its effectiveness on 200 patients who have been suffering from this disorder for many years. The upcoming clinical trials will allow us to evaluate the safety and efficacy of the drug, as well as obtain important data for its registration and release on the market.',
  location: 'Tavern on the Greend, New York',
  startDate: '2026-06-01T09:00:00.000Z',
  endDate: '2026-06-04T18:00:00.000Z',
  address: {
    street: '434 Rockaway Ave',
    city: 'Brooklyn',
    state: 'New York',
    zip: '11212-5636',
    coordinates: {
      lat: 50.06387018266707,
      lng: 19.928407704961657,
    },
  },
  manufacturer: 'Serenity Health Clinic',
  tags: ['Medicine #459026', 'Vaccine #78'],
};

export default function ProcessDetailsRoute() {
  // const id = Number.parseInt(useParams().id);

  const {
    name,
    description,
    location,
    startDate,
    endDate,
    address,
    manufacturer,
    tags,
  } = process;

  return (
    <Container className={styles.container}>
      <div className={styles.mainContainer}>
        <ProcessCard
          name={name}
          location={location}
          address={address}
          startDate={startDate}
          endDate={endDate}
        />

        <Section title="About this event">
          <p>{description}</p>
        </Section>
      </div>

      <Divider orientation="vertical" isResponsive />

      <div className={styles.secondaryContainer}>
        <Section title="Manufacturer">
          <Manufacturer manufacturer={manufacturer} />
        </Section>

        <Section title="Location">
          <MarkeredMap coordinates={address.coordinates} />
          <Button variant="transparent">
            <IconContainer>
              <IoNavigateOutline />
            </IconContainer>
            <span>Get Directions</span>
          </Button>
        </Section>

        <Section title="Tags">
          <ProcessTagsContainer tags={[...tags, ...tags, ...tags]} />
        </Section>
      </div>
    </Container>
  );
}
