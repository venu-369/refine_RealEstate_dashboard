import React from 'react'
import { Box, Typography, Stack } from '@pankod/refine-mui'

import { propertyReferralsInfo } from 'constants/index'

const PropertyReferrals = () => {
  return (
    <Box p={4} bgcolor="#fcfcfc" id="chart" minWidth={490} display="flex" flexDirection="column" borderRadius="15px">
      <Typography fontSize={18} fontWeight={600} color="#11142d">Property Referrals</Typography>
      <Stack></Stack>
    </Box>
  )
}

export default PropertyReferrals
