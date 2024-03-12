import { Box, Typography } from '@mui/material'
import React from 'react'

export const HeroSection = () => {
    return (
        <Box sx={{
            aspectRatio: '16/9',
            backgroundColor: (theme) => theme.palette.secondary.main,
            maxHeight: '780px',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
        }}>
            <Box
                sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    maxWidth: '500px',
                    width: '34%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: '1',
                    top: 0,
                    left: 0,
                }}>
            </Box>
            <Box sx={{
                zIndex: '1000',
                position: 'absolute',
                top: '50%',
                left: '75%',
                maxWidth: '400px',
                transform: 'translate(-50%, -50%)',
            }}
            >
                <Typography
                    variant="h1"
                    sx={{ color: (theme) => theme.palette.text.main }}>
                    INTERIOR
                    DESIGN
                    STUDIO
                </Typography>
                <hr />
                <Typography
                    variant="h3"
                    sx={{ color: (theme) => theme.palette.text.main }}>
                    Building Beautiful Spaces
                </Typography>
            </Box>
            <Box
                component='img'
                src='/img/hero.png'
                alt='hero furniture'
                sx={{
                    height: '100%',
                    position: 'relative',
                    zIndex: '100',
                }}
            />
        </Box>
    )
}
