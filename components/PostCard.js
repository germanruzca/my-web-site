import styles from '../styles/PostCard.module.css';
import { IconCalendar, IconComment, IconClock } from "./icons";
import { formatDate } from "../lib/format_date";
import Link from 'next/link'
import { IconArrow } from './icons';
import readingTime from "reading-time";

export const PostCard = ({post}) => {
  return (
    <div>
      <Link key={post.slug} href={`/${post.slug}`} >
        <div className={styles.card}>
          <div>
            <h2 className={styles.title_card}>{post.title}</h2>
            <div className={styles.calendar}>
              <IconCalendar/>
              <p className={styles.icons}>{formatDate(post.date)}</p>
            </div>
            <div className={styles.calendar}>
              <IconClock/>
              <p className={styles.icons}>{parseInt((readingTime(post.content).minutes))} min</p>
            </div>
          </div>
          <div className={styles.arrow_icon}>
              <div>
                  <IconArrow size={40}/>
              </div>
          </div>
        </div>
      </Link>
    </div>
  )
}