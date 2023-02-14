import { Box, Typography, Stack } from "@pankod/refine-mui"
import { useList } from "@pankod/refine-core"

import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from "components"

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="white">
         Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title="Properties fot Sale"
          value={684}
          series={[75,25]}
          colors={["#475be8", "#e4e8ef" ]}
         />
         <PieChart 
          title="Properties fot Rent"
          value={550}
          series={[65,45]}
          colors={["#455ce8", "#e4v6ef" ]}
         />
         <PieChart 
          title="Total customers"
          value={5684}
          series={[75,25]}
          colors={["#295be8", "#c3e8ef" ]}
         />
         <PieChart 
          title="Properties for Cities"
          value={555}
          series={[75,25]}
          colors={["#475be8", "#e4e8ef" ]}
         />

      </Box>
    </Box>
  )
}

export default home
