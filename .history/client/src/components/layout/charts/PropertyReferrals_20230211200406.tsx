import React from 'react'
import { Box, Typography, Stack } from '@pankod/refine-mui'

import { propertyReferralsInfo } from 'constants/index'

interface ProgressBarProps {
  title: string
  percent: number
  color: string
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => {}

const PropertyReferrals = () => {
  return (
    <Box p={4} bgcolor="#fcfcfc" id="chart" minWidth={490} display="flex" flexDirection="column" borderRadius="15px">
      <Typography fontSize={18} fontWeight={600} color="#11142d">Property Referrals</Typography>
      <Stack my="20px" direction="column" gap={4}>

      </Stack>
    </Box>
  )
}

export default PropertyReferrals
