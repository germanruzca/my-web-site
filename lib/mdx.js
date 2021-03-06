import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from "reading-time";

const root = process.cwd();

export const getFiles = () => fs.readdirSync(path.join(root, 'data'));

export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, 'data', `${slug}.mdx`), 
    'utf8'
  );

  const {data, content} = await matter(mdxSource);
  const source = await serialize(content, {});
  return {
    source,
    frontmatter: {
      readingTime: readingTime(content),
      slug,
      ...data,
    },
  };
};

export const getAllFilesMetaData = () => {
  const files = getFiles();

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(path.join(root, 'data', postSlug));
    const { data, content } = matter(mdxSource);
    return [{...data, content: content, slug: postSlug.replace('.mdx', '')}, ...allPosts];
  }, []);
};
