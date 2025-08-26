import {CssBaseline, ThemeProvider} from "@mui/material"
import {createTheme } from "@mui/material"
import { useSelector } from "react-redux"
import { themeSettings } from "theme"

const App = () => {
  const mode = useSelector((state)=>state.global.mode )
  const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode])
  return (
  <>
  <div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  </div>
  
  </>
  )
}

export default App
