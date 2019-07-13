import React from 'react';
import styled from 'styled-components';

const StyledArea = styled.div`
  min-height: 200px;
  position: relative;
`;

const ContentArea = ({ children }) => (
  <StyledArea>
    {children}
  </StyledArea>
);

export default ContentArea;
