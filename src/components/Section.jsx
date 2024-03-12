import { Box, Container } from '@mui/material'
import React from 'react'

export const Section = ({ children }) => {
    return (
        <Container sx={{ display: 'flex', padding: '6rem 0rem', gap: '4rem', minHeight: '250px', flexDirection: 'column' }}>
            {children}
        </Container>
    )
}

