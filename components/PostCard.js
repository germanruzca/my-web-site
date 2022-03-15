import styles from '../styles/PostCard.module.css';
import Link from 'next/link'

export const PostCard = ({post}) => {
  return (
    <div>
      <Link key={post.slug} href={`/${post.slug}`} >
        <a>
          <div  className={styles.card}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}