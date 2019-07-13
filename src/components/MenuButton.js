import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  color: hsla(272, 72%, 18%, 1);
  font-size: 18px;
  outline: none;
  background: transparent;
  text-align: center;
  cursor: pointer;
  border: 1px solid hsla(272, 72%, 18%, 1);
  padding: .25rem 1rem;
  min-width: 80px;
`;

const MenuButton = ({ children, ...other }) => (
  <StyledButton {...other}>
    {children}
  </StyledButton>
);

export default MenuButton;
