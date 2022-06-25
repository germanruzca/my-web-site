import { PostMetadata } from "../index";
import {LayoutPost, ContentPost} from "./styled";

export const Component = ({ children, metadata={} }) => {
    return (
        <LayoutPost>
            <PostMetadata metadata={metadata} />
            <ContentPost>{children}</ContentPost>
        </LayoutPost>
    );
}

export { Component as LayoutPost};
export default Component;