import { Box } from '@mui/material'
import React from 'react'

export const TitleContainer = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {children}
        </Box>
    )
}
