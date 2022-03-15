import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header'


import { getAllFilesMetaData } from '../lib/mdx';

export default function AboutMe({ posts }) {
  return (
    <div>
      <Header/>
      <h1>Blof mi ..|..</h1>
        {
          posts.map((post) => (
            <Link key={post.slug} href={`/${post.slug}`} className={styles.card}>
              <a>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
              </a>
            </Link>
          ))
        }
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesMetaData();
  console.log(posts);
  return {
    props: {posts},
  }
}