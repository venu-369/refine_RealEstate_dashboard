import { Box, Typography, Stack } from "@pankod/refine-mui"
import { useList } from "@pankod/refine-core"

import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from "components"

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
         Dashboard
      </Typography>
    </Box>
  )
}

export default home
