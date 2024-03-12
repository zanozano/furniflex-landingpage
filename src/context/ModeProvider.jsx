import React, { createContext, useContext } from 'react';
import { createTheme } from '@mui/material/styles';

const ModeContext = createContext();

export const useMode = () => {
    return useContext(ModeContext);
};

export const ModeProvider = ({ children }) => {


    const theme = createTheme({
        typography: {
            h1: {
                fontFamily: 'Tenor Sans',
                fontSize: '4rem',
                fontWeight: 400,
                fontStyle: 'normal',
                '@media (max-width:600px)': {
                    fontSize: '1.8rem',
                },
            },
            h2: {
                fontFamily: 'Tenor Sans',
                fontSize: '4rem',
                fontWeight: 400,
                fontStyle: 'normal',
                '@media (max-width:600px)': {
                    fontSize: '1.6rem',
                },
            },
            h3: {
                color: (theme) => theme.palette.textSecondary.main,
                fontFamily: "Red Hat Display",
                fontSize: '2rem',
                fontWeight: 'bold',
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
            primary: {
                main: '#86D5CF',
            },
            secondary: {
                main: '#D2E4EE',
            },
            textPrimary: {
                main: '#1F1F1F',
            },
            textSecondary: {
                main: '#464646',
            },
            surface: {
                main: '#ffffff',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        backgroundColor: (theme) => theme.palette.primary.main,
                        textTransform: 'initial',
                    },
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        color: '#000000',
                    },
                }
            },
        },
    });

    const contextValue = {
        theme,
    };

    return (
        <ModeContext.Provider value={contextValue}>
            {children}
        </ModeContext.Provider>
    );
};
