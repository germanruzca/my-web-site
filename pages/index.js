import Head from 'next/head';
import { Header } from '../components'
import { Box, Text, useMediaQuery, Image } from '@chakra-ui/react'
import { IconGithub, IconLinkedinF, IconTwitter, IconInstagramF, IconGmail} from "../components/icons";
import vector from '../components/assets/img/blob.svg'

export default function Home() {
  const [isSmallerThan450] = useMediaQuery('(max-width: 450px)')
  return (
    <div>
      <Head>
        <title>German Ruiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Box as={'main'} display={"flex"} maxW={960} margin={(0, 'auto')} minH={600} textAlign={isSmallerThan450 ? "center" : ''} alignItems={"center"}>
        <Box>
          <Box>
            <Text margin={0} fontSize={20} fontWeight={700}>
              Hola! soy
            </Text>
            <Text margin={0} fontSize={80} fontWeight={700} fontFamily={'Roboto, sans-serif'}>
              German Ruiz
            </Text>
            <Text margin={0} fontSize={35} fontWeight={700}>
              Software Engineer
            </Text>
          </Box>
          <Box color={`#EABE7F`} fontSize={40} marginTop={40} display={"flex"} justifyContent={isSmallerThan450 ? 'center': ''}>
            <Box marginRight={20}>
              <a href={'https://github.com/germanruzca'}  target={'_blank'} rel="noreferrer">
                <IconGithub/>
              </a>
            </Box>
            <Box marginRight={20}>
              <a href={'https://www.linkedin.com/in/germanruzca/'}  target={'_blank'} rel="noreferrer">
                <IconLinkedinF/>
              </a>
            </Box>
            <Box marginRight={20}>
              <a href={'https://twitter.com/germanruzca'}  target={'_blank'} rel="noreferrer">
                <IconTwitter/>
              </a>
            </Box>
            <Box marginRight={20}>
              <a href={'https://www.instagram.com/germanruzca/'} target={'_blank'} rel="noreferrer" >
                <IconInstagramF/>
              </a>
            </Box>
            <Box marginRight={20}>
              <a href={'mailto:germanruzca@gmail.com'}>
                <IconGmail/>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}