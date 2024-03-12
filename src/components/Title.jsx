import { Box, Typography } from '@mui/material'
import React from 'react'

export const Title = ({ title, subtitle }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h2">
                {title}
            </Typography>
            <Typography variant="h3">
                {subtitle}
            </Typography>
        </Box>
    )
}
