import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 5px hsla(272, 72%, 18%, 0.2);
  border: 1px solid hsla(272, 72%, 18%, 1);
  border-radius: 2px;
  box-sizing: border-box;
  color: hsla(272, 72%, 18%, 1);
  padding: 1rem;
  min-width: 150px;
  text-align: left;
  margin: 10px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: .25rem 0;
  }
`;

const VerticalMenu = () => (
  <MenuWrapper>
    <ul>
      <li>Link 1</li>
      <li>Link 2</li>
      <li>Link 3</li>
    </ul>
  </MenuWrapper>
);

export default VerticalMenu;
