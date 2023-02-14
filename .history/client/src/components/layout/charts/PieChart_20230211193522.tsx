import React from 'react'
import { Box, Typography, Stack } from '@pankod/refine-mui'

import { PieChartProps } from 'interfaces/home'

const PieChart = ({title, value, series, colors}: PieChartProps) => {
  return (
    <Box>
      <Stack direction="column">
        <Typography fontSize={14} color="#808191">{title}</Typography>
        <Typography fontSize={25} fontWeight={700} color="#11142d" mt={1}>{value}</Typography>
      </Stack>
    </Box>
  )
}

export default PieChart
