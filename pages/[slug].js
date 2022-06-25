import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../lib/mdx';
import { Header } from '../components';
import { LayoutPost } from '../components';


export default function Post({ source, frontmatter}) {
  return (
    
    <div>
      <Head>
        <title>{frontmatter.title} - germanruzca</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div>
        <LayoutPost metadata={frontmatter}>
          <MDXRemote {...source}/>
        </LayoutPost>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);

  return {
    props: { source, frontmatter },
  };
}

export async function getStaticPaths() {
  const posts = await  getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  }
}