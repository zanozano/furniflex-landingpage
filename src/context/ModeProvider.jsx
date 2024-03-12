import React, { createContext, useContext, useEffect, useState } from 'react';
import { createTheme } from '@mui/material/styles';

const ModeContext = createContext();

export const useMode = () => {
    return useContext(ModeContext);
};

export const ModeProvider = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(true);

    const toggleMode = () => {
        setIsLightMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        localStorage.setItem('isLightMode', isLightMode.toString());
    }, [isLightMode]);

    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins, sans-serif',
            h1: {
                fontSize: '4.4rem',
                fontWeight: 500,
                '@media (max-width:600px)': {
                    fontSize: '2.8rem',
                },
            },
            h2: {
                fontSize: '2.2rem',
                fontWeight: 300,
                '@media (max-width:600px)': {
                    fontSize: '1.6rem',
                },
            },
            h3: {
                fontSize: '1.4rem',
                '@media (max-width:600px)': {
                    fontSize: '1.2rem',
                },
            },
            h4: {
                fontSize: '1.2rem',
                '@media (max-width:600px)': {
                    fontSize: '1.1rem',
                },
            },
            subtitle: {
                '@media (max-width:600px)': {
                    fontSize: '0.88rem',
                },
            },
            body2: {
                lineHeight: '1.2rem',
                '@media (max-width:600px)': {
                    fontSize: '0.88rem',
                },
            },

        },
        palette: {
            mode: isLightMode ? "light" : "dark",
            primary: {
                main: isLightMode ? '#055CDF' : '#055CDF',
            },
            secondary: {
                main: '#032F70',
            },
            tertiary: {
                main: '#4EE4C1',
            },
            surface: {
                main: isLightMode ? '#ffffff' : '#292929',
            },
            photo: {
                main: isLightMode ? '#FAF9F6' : '#222222',
            },
            invert: {
                main: isLightMode ? '#222222' : '#EEEEEE',
            },
            gradient: {
                main: isLightMode ? 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 1) 100%)' : 'linear-gradient(to bottom, transparent 0%, rgba(18, 18, 18, 1) 100%)',
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'initial',
                    },
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#ffffff',
                        color: '#000000',
                    },
                }
            },
        },
    });

    const contextValue = {
        isLightMode,
        toggleMode,
        theme,
    };

    return (
        <ModeContext.Provider value={contextValue}>
            {children}
        </ModeContext.Provider>
    );
};
