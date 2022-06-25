import styled from 'styled-components'

export const PostCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 600px;
  height: fit-content;
  cursor: pointer;
  border-radius: 10px;
  color:${props => props.theme.colors.black};
  margin: 30px 0 ${props => props.mobile ? '45px' : '0'} 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 450px) {
    width: 350px;
  }
`;

export const VerticalLine = styled.div`
  > div {
    border-right: 6px solid ${props => props.theme.colors.secondColorPage};
    height: 80px;
    position: absolute;
  }

  @media screen and (max-width: 450px) {
    > div {
      height: 100px;
    }
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 30px;
  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;

export const CardInfo = styled.div`
  margin-left: 20px;
`;

export const CardIcons = styled.div`
  margin: 10px 0;
  font-size: 18px;
  display: flex;
  font-weight: 700;
`;

export const EachIcon = styled.div`
  display: flex;
  align-items: center;
  
  > p {
    margin: 0 10px;
  }
`;