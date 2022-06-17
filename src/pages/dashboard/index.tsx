// ** MUI Imports

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Card from '@mui/material/Card'
import DashboardTable from 'src/views/dashboard/Table'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Card>
        <DashboardTable />
      </Card>
    </ApexChartWrapper>
  )
}

export default Dashboard
