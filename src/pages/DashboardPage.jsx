import { Helmet } from 'react-helmet';
import ContentLayout from '../components/layout/ContentLayout';
import PageTitle from '../components/atom/PageTitle';
import DashboardCurrentBooking from '../components/organism/DashboardCurrentBooking';
import { css } from '@emotion/react';
import DashboardNewBooking from '../components/organism/DashboardNewBooking';

const DasboardPage = () => {
  return (<>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <ContentLayout>
      <PageTitle>Dashboard</PageTitle>
      <div css={css`width: 100%; margin-top: 30px; @media(min-width: 768px) {display: flex; justify-content: space-between; gap: 40px; align-items: flex-start;}`}>
        <DashboardCurrentBooking />
        <DashboardNewBooking />
      </div>
    </ContentLayout>
  </>)
}

export default DasboardPage