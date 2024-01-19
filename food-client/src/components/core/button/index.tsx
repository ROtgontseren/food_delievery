import { Stack ,Button as MiuButton} from '@mui/material';
import React, { ReactNode } from 'react'

interface IButtonProps {
    label: ReactNode;
    disabled:boolean;
    Onclick?: () => void;
}

const Button = ({disabled,label,}: IButtonProps) => {
  return (
    <Stack gap={1}> 
        <MiuButton>
            
        </MiuButton>
    </Stack>
  )
}

export default Button;