import React from 'react'
import { Box, Typography, Stack } from '@pankod/refine-mui'

import { PieChartProps } from 'interfaces/home'

const PieChart = ({title, value, series, colors}: PieChartProps) => {
  return (
    <Box>
      <Stack direction="column">
        <Typography>{title}</Typography>
      </Stack>
    </Box>
  )
}

export default PieChart
