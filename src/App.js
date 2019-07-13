import React from 'react';
import styled from 'styled-components';
import FadeExample from './components/Fade';
import ExpandExample from './components/Expand';
import PushExample from './components/Push';
import RevealExample from './components/Reveal';
import SlideExample from './components/Slide';
import ZoomExample from './components/Zoom';
import './App.css';

const PageContent = styled.div`
  margin: 1rem auto;
  max-width: 970px;
  color: hsla(272, 72%, 18%, 1);

  @media (max-width: 700px) {
    margin: 1rem;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: .5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ItemWrapper = styled.div`
  border: 1px solid hsla(272, 72%, 18%, 0.2);
  border-radius: 6px;
  padding: 1rem;
`;

function App() {
  return (
    <PageContent className="App">
      <h1>
        <a
          href="https://www.telerik.com/kendo-react-ui/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KendoReact UI
        </a> Animation Demo
      </h1>
      <GridWrapper>
        <ItemWrapper>
          <h4>Expand</h4>
          <ExpandExample />
        </ItemWrapper>
        <ItemWrapper>
          <h4>Fade</h4>
          <FadeExample />
        </ItemWrapper>
        <ItemWrapper>
          <h4>Push</h4>
          <PushExample />
        </ItemWrapper>
        <ItemWrapper>
          <h4>Reveal</h4>
          <RevealExample />
        </ItemWrapper>
        <ItemWrapper>
          <h4>Slide</h4>
          <SlideExample />
        </ItemWrapper>
        <ItemWrapper>
          <h4>Zoom</h4>
          <ZoomExample />
        </ItemWrapper>
      </GridWrapper>
    </PageContent>
  );
}

export default App;
