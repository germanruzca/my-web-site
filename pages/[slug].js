import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../lib/mdx';
import MDXComponents from '../components/MDXComponents'
import { Header } from '../components';
import styles from '../styles/Post.module.css';
import { Layout } from '../components/Layout';

export default function Post({ source, frontmatter}) {
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <Layout metadata={frontmatter}>
          <MDXRemote {...source} components={MDXComponents}/>
        </Layout>
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