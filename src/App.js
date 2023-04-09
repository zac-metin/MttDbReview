
import './App.css';
import StudyApps from './StudyApps';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Card from './Card';
import CardHorizontal from './CardHorizontal';
import CardHorizontal2 from './CardHorizontal2';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <CardHorizontal />
        <Card />
        <FAQ />
        <CardHorizontal2 />
        <Testimonials />
        <CardHorizontal2 />
        <StudyApps />
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
