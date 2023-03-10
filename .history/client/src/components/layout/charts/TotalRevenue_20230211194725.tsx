import { Box, Typography, Stack } from '@pankod/refine-mui'
import ReactApexChart from 'react-apexcharts'
import { ArrowCircleUpRounded } from '@mui/icons-material'
import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config'


const TotalRevenue = () => {
  return (
    <Box p={4} flex={1} bgcolor="#fcfcfc" id="chart" display="flex" flexDirection="column" borderRadius="15px">
        <Typography fontSize={18} fontWeight={600} color="#11142d">Total Revenue</Typography>
      
    </Box>
  )
}

export default TotalRevenue
