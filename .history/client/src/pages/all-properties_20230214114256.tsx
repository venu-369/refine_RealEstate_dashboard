import { Add } from '@mui/icons-material'
import { useTable } from '@pankod/refine-core'
import { Box, Stack, Typography } from '@pankod/refine-mui'
import { useNavigate } from '@pankod/refine-react-router-v6'
import { PropertyCard, CustomButton } from 'components'

const AllProperties = () => {

  const navigate = useNavigate()

  const { tableQueryResult: {data, isLoading, isError} } = useTable()

  const allProperties = data?.data ?? [];

  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Erro...r</Typography>

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} color="#fcfcfc"> All Properties</Typography>
        <CustomButton 
          title="Add Property"
          handleClick={() => navigate('/properties/create')}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
         />
      </Stack>

      <Box mt="20px" sx={{display: 'flex', flexWrap: 'wrap', gap: 3}}>
        {allProperties.map((property) => (
          <PropertyCard />

    ))}
        
      </Box>
    </Box>
  )

  }
export default AllProperties
