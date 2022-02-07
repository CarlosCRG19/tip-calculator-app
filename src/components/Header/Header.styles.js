import styled from 'styled-components';

const StyledHeader = styled.div`
  margin: 3.5rem 0 2.25rem;
  text-align: center; 

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop} ) {
    margin: 10.25rem 0 5.15rem;
  }
`;

export { StyledHeader };