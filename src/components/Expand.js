import React, { useState } from 'react';
// KendoReact component import
import MenuButton from './MenuButton';
import MenuBar from './MenuBar';
import Banner from './Banner';
import ContentArea from './ContentArea';
// KendoReact stylesheet import

const ExpandExample = () => {
  const [shown, setShown] = useState(false);
  return (
    <div>
      <MenuBar>
        <MenuButton onClick={() => setShown(!shown)}>
          {
            shown ? `Collapse` : `Expand`
          }
        </MenuButton>
      </MenuBar>
      <ContentArea>
        <Expand
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            right: '0',
          }}
        >
          {
            shown ? (
              <Banner>
                Lorem ipsum
              </Banner>
            ) : null
          }
        </Expand>
      </ContentArea>
    </div>
  );
}

export default ExpandExample;
