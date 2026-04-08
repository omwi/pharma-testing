import MediaQuery from 'react-responsive';

import Container from '@/components/ui/container/container';
import PageHeading from '@/components/ui/page-heading/page-heading';
import ProcessesGrid from '@/features/processes/components/processes-grid/processes-grid';
import ProcessesTable from '@/features/processes/components/processes-table/processes-table';

import * as styles from './processes.module.css';

export default function ProcessesRoute() {
  return (
    <Container className={styles.container}>
      <PageHeading
        title="List of medications in development"
        description="Brief summary of testing processes"
      />
      <MediaQuery query="(width > 1024px)">
        <ProcessesTable />
      </MediaQuery>

      <MediaQuery query="(width <= 1024px)">
        <ProcessesGrid />
      </MediaQuery>
    </Container>
  );
}
