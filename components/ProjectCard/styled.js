import styled from 'styled-components'

export const ProjectCard = styled.div`
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
    height: 210px;
    position: absolute;
  }

  @media screen and (max-width: 450px) {
    > div {
      height: 260px;
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

export const Description = styled.div`
  text-align: justify;
`;

export const Icons = styled.div`
  margin: 10px 0;
  width: 100px;
  height: 100px;
  display: flex;
  font-size: 20px;
`;

export const EachIcon = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  margin-right: 10px;
  > svg {
    margin-right: 5px;
  }
`;