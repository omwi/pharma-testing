import { IoNavigateOutline } from 'react-icons/io5';
import { useParams } from 'react-router';

import { useGetProcessDetailsQuery } from '@/app/api';
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

export default function ProcessDetailsRoute() {
  const id = useParams().id;
  const { data, isLoading, isFetching, isUninitialized } =
    useGetProcessDetailsQuery(id);

  if (isLoading || isFetching || isUninitialized) return null;

  const {
    name,
    description,
    location,
    startDate,
    endDate,
    address,
    manufacturer,
    tags,
  } = data;

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
