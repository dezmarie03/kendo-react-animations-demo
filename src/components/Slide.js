import React, { useState } from 'react';
// KendoReact component import
import MenuButton from './MenuButton';
import MenuBar from './MenuBar';
import VerticalMenu from './VerticalMenu';
import ContentArea from './ContentArea';
// KendoReact stylesheet import

const SlideExample = () => {
  const [slid, setSlid] = useState(false);
  return (
    <div>
      <MenuBar>
        <MenuButton onClick={() => setSlid(!slid)}>
          {
            slid ? `Close menu` : `Open menu`
          }
        </MenuButton>
      </MenuBar>
      <ContentArea>
        <Slide
          style={{
            position: 'absolute',
            left: '10px',
            top: '10px'
          }}
        >
          { slid ? (
              <VerticalMenu />
            ) : null
          }
        </Slide>
      </ContentArea>
    </div>
  );
}

export default SlideExample;
