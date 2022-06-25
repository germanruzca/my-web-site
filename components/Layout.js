import { PostMetadata } from "./index";
import styles from "../styles/Post.module.css";

export const Layout = ({ children, metadata={} }) => {
  return (
    <div>
      <PostMetadata metadata={metadata} />
      <div className={styles.post_content}>{children}</div>
    </div>
  );
}