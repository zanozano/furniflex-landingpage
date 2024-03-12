import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const pages = ['Home', 'Product', 'Contact'];

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6">
                        Furniflex
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex', gap: '24px' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ color: 'inherit' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: '24px' }}>
                        <Button variant="contained" disableElevation>Sign in</Button>
                        <Button variant="contained" disableElevation>Sign in</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
