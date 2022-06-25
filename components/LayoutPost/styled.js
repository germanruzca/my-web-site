import styled from 'styled-components'

export const LayoutPost = styled.div`
  max-width: 960px;
  margin: 0 auto;

  @media screen and (max-width: 450px) {
    margin: 20px;
  }
  
`;

export const ContentPost = styled.div`
  text-align: justify;
  line-height: 30px;
  margin-top: 60px;
`;