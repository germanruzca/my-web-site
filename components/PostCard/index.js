import { PostCard, Title, VerticalLine, CardInfo, CardIcons, EachIcon } from './styled'
import { IconCalendar, IconComment, IconClock } from "../icons";
import { formatDate } from "../../lib/format_date";
import Link from 'next/link'
import { IconArrow } from '../icons';
import readingTime from "reading-time";

const Component = ({post}) => {
  return (
    <Link key={post.slug} href={`/${post.slug}`} >
      <PostCard>
        <div>
          <VerticalLine>
            <div></div>
          </VerticalLine>
          <CardInfo>
            <Title>{post.title}</Title>
            <CardIcons>
              <EachIcon>
                <IconCalendar/>
                <p>{formatDate(post.date)}</p>
              </EachIcon>
              <EachIcon>
                <IconClock/>
                <p>{parseInt((readingTime(post.content).minutes))} min</p>
              </EachIcon>
            </CardIcons>
          </CardInfo>
        </div>
      </PostCard>
    </Link>
  )
}
export { Component as PostCard };
export default Component;