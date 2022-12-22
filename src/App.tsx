import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import {BrowserRouter} from "react-router-dom"
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router/Router";
import { CheckoutContextProvider } from "./contexts/CheckoutContext";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CheckoutContextProvider>
          <Router/>
        </CheckoutContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
  
