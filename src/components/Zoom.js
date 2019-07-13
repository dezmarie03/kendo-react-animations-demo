import React, { useState } from 'react';
// KendoReact component import
import MenuButton from './MenuButton';
import MenuBar from './MenuBar';
import Item from './Item';
import ContentArea from './ContentArea';
// KendoReact stylesheet import

const ZoomExample = () => {
  const [zoomed, setZoom] = useState(false);
  return (
    <div>
      <MenuBar>
        <MenuButton onClick={() => setZoom(!zoomed)}>
          {
            zoomed ? `Hide` : `Show`
          }
        </MenuButton>
      </MenuBar>
      <ContentArea>
        <Zoom
          style={{
            position: 'absolute',
            left: '10px',
            top: '10px'
          }}
        >
          { zoomed ? (
              <Item>
                Item
              </Item>
            ) : null
          }
        </Zoom>
      </ContentArea>
    </div>
  );
}

export default ZoomExample;
