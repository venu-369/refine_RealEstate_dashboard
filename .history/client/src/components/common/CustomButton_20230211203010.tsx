import React from 'react'
import { Button } from '@pankod/refine-mui'

import { CustomButtonProps } from 'interfaces/common'

const CustomButton = ({type, title, backgroundColor, color, fullWidth, icon, handleClick}: CustomButtonProps) => {
  return (
    <button>
      {icon}
      {title}
    </button>
  )
}

export default CustomButton
