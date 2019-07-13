import React, { useState } from 'react';
// KendoReact component import
import MenuButton from './MenuButton';
import MenuBar from './MenuBar';
import ContentArea from './ContentArea';
import Item from './Item';
// KendoReact stylesheet import

const PushExample = () => {
  const [index, setPush] = useState(1);
  return (
    <div>
      <MenuBar>
        <MenuButton onClick={() => setPush(index + 1)}>
          Push
        </MenuButton>
      </MenuBar>
      <ContentArea>
        <Push
          direction="right"
          stackChildren={true}
          style={{
            position: 'absolute',
            left: '10px',
            top: '10px',
          }}
        >
          <Item key={index}>{index}</Item>
        </Push>
      </ContentArea>
    </div>
  );
}

export default PushExample;
