import { IconCalendar, IconComment, IconClock } from "./icons";
import styles from "../styles/PostMetadata.module.css";
import { formatDate } from "../lib/format_date";

export const PostMetadata = ({ metadata }) => {
  return (
    <div>
      <div className={styles.metadata__title__post}>
        <h2>{metadata.title}</h2>
      </div>
      <div className={styles.metadata__post__icons}>
        <div className={styles.metadata__icons}>
          <IconCalendar/>
          {formatDate(metadata.date)}
        </div>
        <div className={styles.metadata__icons}>
          <IconClock/>
          {Math.round(metadata.readingTime.minutes)} minutos de lectura
        </div>
      </div>
    </div>
  );
}