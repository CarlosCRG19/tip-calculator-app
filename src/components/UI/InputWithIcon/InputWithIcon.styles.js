import styled from 'styled-components';

const StyledInputWithIcon = styled.div`
  height: 2rem;
  display: flex;
  position: relative;
  align-items: center;

  & img {
    width: 0.75rem;
    position: absolute;

    top: 0.5rem;
    left: 1.2rem;
  }

  & input {
    padding: 0.5rem 1.2rem 0.5rem 3.15rem;
  }
`;

export { StyledInputWithIcon };

