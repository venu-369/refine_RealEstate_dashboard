import { Add } from '@mui/icons-material'
import { useTable } from '@pankod/refine-core'
import { Box, Stack, Typography } from '@pankod/refine-mui'
import { useNavigate } from '@pankod/refine-react-router-v6'
import { PropertyCard, CustomButton } from 'components'

const AllProperties = () => {

  const navigate = useNavigate()

  const { tableQueryResult: {data, isLoading, isError}, current, setCurrent, setPageSize, pageCount, sorter, setSorter, filters, setFilters } = useTable()

  const allProperties = data?.data ?? [];

  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Erro...r</Typography>

  return (
    <Box>
       <Box mt='20px' sx={{display: 'flex', flexWrap: 'wrap', gap: 3}}>
        <Stack direction="column" width="100%">
          <Typography fontSize={25} fontWeight={700} color="#fcfcfc">{!allProperties.length ? 'there are no properties' : 'All Properties'}</Typography>
        </Stack>

       </Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        
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
          <PropertyCard 
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
            
           />


    ))}
        
      </Box>
    </Box>
  )

  }
export default AllProperties
