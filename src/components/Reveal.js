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
            revealed ? `Close menu` : `Open menu`
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
