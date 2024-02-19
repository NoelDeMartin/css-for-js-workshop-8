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

const InactiveText = styled.span`
  @media (prefers-reduced-motion: no-preference) {
    display: block;
    transition: transform 200ms;

    ${Wrapper}:hover & {
      transform: translateY(-100%);
    }
  }
`;

const ActiveText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  font-weight: ${WEIGHTS.bold};

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 200ms;

    ${Wrapper}:hover & {
      transform: translateY(0%);
    }
  }
`;

export default HeaderNavLink;
