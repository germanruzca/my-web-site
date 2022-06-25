import styled from 'styled-components';

export const Title = styled.div`
  font-weight: 700;
  font-size: 38px;
  
  > h2 {
    margin: 0 0 20px 0;
    color: #231F20;
  }
  @media screen and (max-width: 450px) {
      font-size: 20px;
  }
`;

export const Icons = styled.div`
  display: flex;
  font-weight: 700;
  
  > div {
    display: flex;
    align-items: center;
    margin-right: 10px;
    
    > svg {
      margin-right: 5px;
    }
  }
`;

