import MediaQuery from 'react-responsive';

import Container from '@/components/ui/container/container';
import PageHeading from '@/components/ui/page-heading/page-heading';
import ProcessesGrid from '@/features/processes/components/processes-grid/processes-grid';
import ProcessesTable from '@/features/processes/components/processes-table/processes-table';

import * as styles from './processes.module.css';

export default function ProcessesRoute() {
  return (
    <Container className={styles.container}>
      <Meta />
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

function Meta() {
  return (
    <>
      <title>
        Medications in Development | Clinical Trial Progress Tracking
      </title>
      <meta
        name="title"
        content="Medications in Development | Clinical Trial Progress Tracking"
      />
      <meta
        name="description"
        content="View the full list of medications and vaccines in development. Track testing status, success rates, and trial timelines across multiple medical facilities."
      />
      <meta
        name="keywords"
        conten="medication development list, clinical trial status, vaccine testing progress, pharma pipeline analytics, medical research tracking"
      />
    </>
  );
}
