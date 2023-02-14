import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from '@pankod/refine-mui'
import { FormProps } from 'interfaces/common'
import CustomButton from './CustomButton'


const Form = ({type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#fcfcfc">
        {type} a Property
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form style={{marginTop: '20px', width: '100%', display: 'flex', flexDirection:"column", gap: '20px'}} onSubmit={handleSubmit(onFinishHandler)}>
          <FormControl>
            <FormHelperText sx={{
              fontWeight: 600,
              marigin: '10px',
              fontSize: 16,
              color: '#11142d'
            }}>
              ENTER PROPERTY NAME

            </FormHelperText>
            <TextField 
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              { ...register("title", {required: true}) }
             />
          </FormControl>


        </form>

      </Box>
    </Box>
  )
}

export default Form
