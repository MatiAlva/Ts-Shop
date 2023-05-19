import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element
}

export enum themePallete {
    BG = '#12181b',
    LIME = '#C8FA5F',
    FONT_GLOBAL = "'JetBrains Mono' , monospace",
    //Alert Styles
    ERROR_MAIN = '#f44336',
    BG_ERROR_MAIN = 'rgba(244,67,54,0.1)',
    SUCCES_MAIN = '#66bb6a',
    BG_SUCCES_MAIN = 'rgba(102,187,106,0.1)'
}


const theme = createTheme({
    palette: {
        mode: 'dark',
        background:{
            default: themePallete.BG
        },
        primary: {
            main: themePallete.LIME
        }
    },
    typography: {
        fontFamily: themePallete.FONT_GLOBAL,
    },
    components: {
        MuiButton: {
            defaultProps: {
                style:{
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '0.5em'
                }
            }
        },
        MuiAlert: {
            defaultProps: {
                style: {
                    borderRadius: '0.8em',
                    fontSize: '1em',
                },
            },
            styleOverrides: {
                standardError: {
                    border: `1px solid ${themePallete.ERROR_MAIN}`,
                    background: themePallete.BG_ERROR_MAIN
                },
                standardSuccess: {
                    border: `1px solid ${themePallete.SUCCES_MAIN}`,
                    background: themePallete.BG_SUCCES_MAIN
                },
            }
        }
    }
})

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
