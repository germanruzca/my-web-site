import Head from 'next/head';
import {Header} from '../components/Header'
import { ProjectCard } from '../components/ProjectCard';
import { Text, Box } from '../components/elements'
import { useMediaQuery } from '@chakra-ui/react'

import data from '../projects.json'

export default function Proyectos() {
    const [isSmallerThan450] = useMediaQuery('(max-width: 450px)');

    return (
    <div>
      <Head>
        <title>Proyectos - germanruzca</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <Box maxW={960} margin={isSmallerThan450 ? 20 : (0, 'auto')} display={'flex'} flexDir={'column'} opacity={.2}>
            <Text fontSize={isSmallerThan450 ? 40 : 50} margin={0} fontWeight={700}>Proyectos - <strong>Sección archivada</strong></Text>
            {
                data.projects.map((project, index) => (
                    <ProjectCard data={project} key={index}/>
                ))
            }
        </Box>
    </div>
  );
}