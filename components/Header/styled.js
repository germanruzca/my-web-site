import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  font-size: 36px;
  font-weight: 700;
  justify-content: center;

  > div {
    margin: 20px;
  }

  @media screen and (max-width: 450px) {
    display: flex;
    font-size: 26px;
    font-weight: 600;
    justify-content: center;
    padding-top: 30px;
    
    div {
    margin: 5px;
    }
  }
`;

export const Route = styled.div`
    color: #00000;
`;