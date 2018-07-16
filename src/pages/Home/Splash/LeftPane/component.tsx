import React from 'react';
import styled from 'styled-components';

import Name from './Name';

const Wrapper = styled.div`
  justify-self: center;

  animation: var(--fade-up-in-keyframe) 1s;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    justify-self: end;
  }
`;

const JobTitle = styled.div`
  text-align: center;
  line-height: 3rem;

  font-family: var(--handwriting-font-family);
  font-size: calc(var(--xl-font-size));

  color: var(--secondary-font-color);
  text-transform: lowercase;

  transition: var(--lg-transition);

  :hover {
    color: var(--primary-font-color);
  }
`;

export const LeftPane = () => (
  <Wrapper>
    <Name />
    <JobTitle>Web Developer</JobTitle>
  </Wrapper>
);

export default LeftPane;