import Container from '@/components/ui/container/container';
import PageHeading from '@/components/ui/page-heading/page-heading';
import ApprovalSummaryCard from '@/features/dashboard/components/approval-summary-card/approval-summary-card';
import PeopleSummaryCard from '@/features/dashboard/components/people-summary-card/people-summary-card';
import ProcessesSummaryCard from '@/features/dashboard/components/processes-summary-card/processes-summary-card';
import TestsChart from '@/features/dashboard/components/tests-chart/tests-chart';
import TotalSummaryCard from '@/features/dashboard/components/total-summary-card/total-summary-card';

import * as styles from './dashboard.module.css';

export default function DashboardRoute() {
  return (
    <Container className={styles.container}>
      <Meta />
      <PageHeading
        title="Dashboard"
        description="Uncover insights into your testing processes"
      />

      <div className={styles.dashboardGrid}>
        <TestsChart className={styles.leftPane} />

        <TotalSummaryCard />
        <ApprovalSummaryCard />
        <ProcessesSummaryCard />
        <PeopleSummaryCard />
      </div>
    </Container>
  );
}

function Meta() {
  return (
    <>
      <title>
        Testing Process Dashboard | Drug Approval & Clinical Analytics
      </title>
      <meta
        name="title"
        content="Dashboard | Drug Approval & Clinical Analytics"
      />
      <meta
        name="description"
        content="Monitor pharmaceutical testing results, drug approval rates, and clinical trial progress. Track total tests, preclinical data, and testing efficiency."
      />
      <meta
        name="keywords"
        content="drug testing dashboard, clinical trials analytics, pharmaceutical data, drug approval rates, preclinical testing, medical testing metrics"
      />
    </>
  );
}
