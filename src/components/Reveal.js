import React, { useState } from 'react';
// KendoReact component import
import MenuButton from './MenuButton';
import MenuBar from './MenuBar';
import VerticalMenu from './VerticalMenu';
import ContentArea from './ContentArea';
// KendoReact stylesheet import

const RevealExample = () => {
  const [revealed, setReveal] = useState(false);
  return (
    <div>
      <MenuBar>
        <MenuButton onClick={() => setReveal(!revealed)}>
          {
            revealed ? (
              <React.Fragment>
                <span class="sr-only">Close menu</span>
                <span class="fa fa-close" aria-hidden="true"></span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span class="sr-only">Open menu</span>
                <span class="fa fa-bars" aria-hidden="true"></span>
              </React.Fragment>
            )
          }
        </MenuButton>
      </MenuBar>
      <ContentArea>
        <Reveal
          style={{
            position: 'absolute',
            left: '10px',
            top: '10px'
          }}
        >
          { revealed ? (
              <VerticalMenu />
            ) : null
          }
        </Reveal>
      </ContentArea>
    </div>
  );
}

export default RevealExample;
