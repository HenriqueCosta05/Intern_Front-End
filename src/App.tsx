import { ThemeProvider } from "@emotion/react"
import { CustomButton } from "./components"
import theme from "./theme/theme"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CustomButton>Hello World</CustomButton>
    </ThemeProvider>
  )
}

export default App
