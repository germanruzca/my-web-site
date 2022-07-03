import {ProjectCard, Title, VerticalLine, CardInfo, Description, Icons, EachIcon} from './styled'
import { Text } from '@chakra-ui/react'
import {IconGithub, IconNewTab} from '../icons';

const Component = ({data}) => {
  return (
    <ProjectCard>
        <VerticalLine>
            <div></div>
        </VerticalLine>
      <CardInfo>

          <Title >{data.name}</Title>
        <Description >
          <Text margin={0} marginBottom={20}>{data.description}</Text>
          <Text fontWeight={700} margin={0}>Tecnologias usadas:</Text>
          <Text margin={0}>
              {
                data.technologies.map(technology => (
                  technology == data.technologies[data.technologies.length - 1] ? ` ${technology}.` : ` ${technology},`

                ))
              }
          </Text>
        </Description>
          <Icons>
              <EachIcon>
                <IconGithub/>
                  <Text margin={0} fontSize={18}>Repo</Text>
              </EachIcon>
              <EachIcon>

                <IconNewTab/>
                  <Text margin={0} fontSize={18}>Demo</Text>
              </EachIcon>
          </Icons>

      </CardInfo>
    </ProjectCard>
  )
}

export { Component as ProjectCard};
export default Component;