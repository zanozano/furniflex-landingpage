import { Box } from '@mui/material'
import React from 'react'

export const DescriptionContainer = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {children}
        </Box>
    )
}
