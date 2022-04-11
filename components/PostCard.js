import styles from '../styles/PostCard.module.css';
import Link from 'next/link'
import { IconArrow } from './icons';

export const PostCard = ({post}) => {
  return (
    <div className={styles.card}>
      <div>
        <h2>{post.title}</h2>
        <p>{post.date}</p>
      </div>
      <div className={styles.arrow_icon}>
        <Link key={post.slug} href={`/${post.slug}`} >
          <div>
            <IconArrow size={40}/>
          </div>
        </Link>
      </div>
    </div>
  )
}