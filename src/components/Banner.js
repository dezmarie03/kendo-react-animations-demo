import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.div`
  background-color: hsla(272, 72%, 18%, 1);
  color: white;
  padding: 1rem;
  width: 100%;
  min-height: 30px;
  box-sizing: border-box;
`;

const Banner = ({ children }) => (
  <StyledBanner>
    {children}
  </StyledBanner>
);

export default Banner;
