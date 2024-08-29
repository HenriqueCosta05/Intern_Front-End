import {Button, ButtonProps, styled } from "@mui/material"

export const CustomButtonTheme = styled(Button)<ButtonProps>(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    border: `1px solid #fff`,
    color: `#fff`
}))