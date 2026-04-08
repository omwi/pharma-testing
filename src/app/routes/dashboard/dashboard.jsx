import Container from '@/components/ui/container/container';
import MutedText from '@/components/ui/muted-text/muted-text';
import ApprovalSummaryCard from '@/features/dashboard/components/approval-summary-card/approval-summary-card';
import PeopleSummaryCard from '@/features/dashboard/components/people-summary-card/people-summary-card';
import ProcessesSummaryCard from '@/features/dashboard/components/processes-summary-card/processes-summary-card';
import TestsChart from '@/features/dashboard/components/tests-chart/tests-chart';
import TotalSummaryCard from '@/features/dashboard/components/total-summary-card/total-summary-card';

import * as styles from './dashboard.module.css';

export default function DashboardRoute() {
  return (
    <Container className={styles.container}>
      <div>
        <h1>Testing Dashboard</h1>
        <MutedText>Uncover insights into your testing processes</MutedText>
      </div>

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
