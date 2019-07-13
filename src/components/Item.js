import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  background-color: white;
  box-shadow: 0 0 5px hsla(272, 72%, 18%, 0.2);
  border: 1px solid hsla(272, 72%, 18%, 1);
  border-radius: 2px;
  box-sizing: border-box;
  min-width: 150px;
  min-height: 150px;
  text-align: left;
  margin: 10px;
  position: relative;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Item = ({ children }) => (
  <StyledItem>
    <div>{children}</div>
  </StyledItem>
);

export default Item;
