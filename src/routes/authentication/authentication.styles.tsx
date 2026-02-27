import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  row-gap: 40px;
  justify-content: space-between;
  padding: 50px;
  margin: 30px auto;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    row-gap: 100px;
    padding: 0;
    text-align: center;
  }
`;