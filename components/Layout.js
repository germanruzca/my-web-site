import { PostMetadata } from "./PostMetadata";
import { styles } from "../styles/Post.module.css";

export const Layout = ({ children, metadata={} }) => {
  return (
    <div>
      <PostMetadata metadata={metadata} />
      <div>{children}</div>
    </div>
  );
}