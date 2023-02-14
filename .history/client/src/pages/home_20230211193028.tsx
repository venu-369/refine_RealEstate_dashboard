import { Box, Typography, Stack } from "@pankod/refine-mui"
import { useList } from "@pankod/refine-core"

import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from "components"

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
         Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title="Properties fot Sale"
          value={684}
          series={[75,25]}
          color={["#475be8", "#e4e8ef" ]}
         />

      </Box>
    </Box>
  )
}

export default home
