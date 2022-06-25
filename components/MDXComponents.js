import CustomCode from "./CustomCodeBlock";
import {CustomImage} from "./CustomImage";

export const MDXComponents = {
   pre:  (props) => <CustomCode {...props} />,
   img: (props) => <CustomImage {...props} />,
}