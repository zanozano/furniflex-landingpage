import Navbar from "./components/Navbar"
import '../public/css/style.css';
import { ThemeProvider } from "@mui/material";
import { useMode } from "./context/ModeProvider";


function App() {

  const { theme } = useMode();

  return (
    <>
      <ThemeProvider theme={theme}>

        <Navbar />

      </ThemeProvider>
    </>
  )
}

export default App
