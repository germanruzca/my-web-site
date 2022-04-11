import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import { Header } from '../components/Header'
import { PostCard } from '../components/PostCard'
import styles from '../styles/Blog.module.css';

import { getAllFilesMetaData } from '../lib/mdx';

export default function AboutMe({ posts }) {
  return (
    <div>
      <Header/>
      <main className={styles.container}>
        <div className={styles.last_posts}>
          Ultimos posts
        </div>
        <div className={styles.posts}>
          {
            posts.map((post) => (
              <PostCard post={post}/>
            ))
          }
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesMetaData();
  return {
    props: {posts},
  }
}