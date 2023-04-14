import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import ReactPageScroller from "react-page-scroller";

import './App.css';
import Header from './Header';
import StudyApps from './StudyApps';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Card from './Card';
import CardHorizontal from './CardHorizontal';
import Section from './Section';

function App() {
  return (
    <ChakraProvider>
      <Header />
    <div className="App">
      <ReactPageScroller>

        <Section id="About">
          <CardHorizontal />
        </Section>
        <Section id="Testimonials">
          <Testimonials />
        </Section>
        <Section id="Pricing">
          <Card />
        </Section>
        <Section id="Study Apps">
          <StudyApps />
        </Section>
        <Section id="FAQ">
            <FAQ />
        </Section>
      </ReactPageScroller>

    </div>
    </ChakraProvider>
  );
}

export default App;

