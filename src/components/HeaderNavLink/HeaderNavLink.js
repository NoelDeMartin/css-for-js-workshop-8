import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const HeaderNavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <InactiveText>{ children }</InactiveText>
      <ActiveText aria-hidden="true">{ children }</ActiveText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  @media (prefers-reduced-motion: no-preference) {
    display: block;
    transition: transform 200ms;
    transform: translateY(var(--translate-from));

    ${Wrapper}:hover & {
      transform: translateY(var(--translate-to));
    }
  }
`;

const InactiveText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const ActiveText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;

  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${WEIGHTS.bold};
`;

export default HeaderNavLink;
