import { PostCard, Title, VerticalLine, CardInfo, CardIcons, EachIcon } from './styled'
import { IconCalendar, IconClock, IconYoutube } from "../icons";
import { formatDate } from "../../lib/format_date";
import Link from 'next/link'
import readingTime from "reading-time";
import { useMediaQuery } from '@chakra-ui/react'

const Component = ({post}) => {
  const [isSmallerThan450] = useMediaQuery('(max-width: 450px)')
  return (
    <Link key={post.slug} href={post.isVideo ? `https://www.youtube.com/watch?v=${post.videoLink}` : `/${post.slug}`}>
      <a target={`${post.isVideo ? '_blank' : ''}`}>
        <PostCard mobile={isSmallerThan450}>
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
                {
                  post.isVideo
                      ? (
                          <EachIcon>
                            <IconYoutube/>
                            <p>Video</p>
                          </EachIcon>
                      )
                      : (
                          <EachIcon>
                            <IconClock/>
                            <p>{parseInt((readingTime(post.content).minutes)) === 0 ? 'Menos de un minuto' : `${parseInt((readingTime(post.content).minutes))} min`}</p>
                          </EachIcon>
                      )
                }
              </CardIcons>
            </CardInfo>
          </div>
        </PostCard>
      </a>
    </Link>
  )
}
export { Component as PostCard };
export default Component;