import React, { useState } from 'react';
// KendoReact component import
import MenuButton from './MenuButton';
import MenuBar from './MenuBar';
import Banner from './Banner';
import ContentArea from './ContentArea';
// KendoReact stylesheet import

const FadeExample = () => {
  const [faded, setFade] = useState(false);
  return (
    <div>
      <MenuBar>
        <MenuButton onClick={() => setFade(!faded)}>
          {
            faded ? `Hide` : `Show`
          }
        </MenuButton>
      </MenuBar>
      <ContentArea>
        <Fade
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            right: '0',
          }}
        >
          {
            faded ? (
              <Banner>
                Lorem ipsum
              </Banner>
            ) : null
          }
        </Fade>
      </ContentArea>
    </div>
  );
}

export default FadeExample;
