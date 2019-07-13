import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.header`
  background-color: hsla(312, 100%, 90%, 1);
  padding: .5rem 1rem;
  text-align: left;
`;

const MenuBar = ({ children }) => (
  <StyledBar>
    {children}
  </StyledBar>
);

export default MenuBar;
