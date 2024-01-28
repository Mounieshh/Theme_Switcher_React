import { createContext, useContext } from "react";


// Creating  a Context
export const ThemeContext = createContext({
    themeMode : 'light',
    darkTheme: () =>{},
    lightTheme: () => {}
})


//Creating Context Provider
export const ThemeProvider = ThemeContext.Provider;


//Consuming anywhere in the components
export default function useTheme(){
    return useContext(ThemeContext)
}