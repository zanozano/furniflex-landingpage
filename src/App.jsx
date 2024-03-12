import Navbar from "./components/Navbar"
import '../public/css/style.css';
import { ThemeProvider } from "@mui/material";
import { useMode } from "./context/ModeProvider";
import { HeroSection } from "./components/HeroSection";
import { Section } from "./components/Section";
import { TitleContainer } from "./components/TitleContainer";
import { Title } from "./components/Title";
import { DescriptionContainer } from "./components/DescriptionContainer";


function App() {

  const { theme } = useMode();

  return (
    <>
      <ThemeProvider theme={theme}>

        <Navbar />
        <HeroSection />
        <Section>
          <TitleContainer>
            <Title title='COLLECTINONS OF' subtitle='QUALITY CHAIR CONCEPTS' />
            <DescriptionContainer />
          </TitleContainer>
        </Section>
      </ThemeProvider>
    </>
  )
}

export default App
