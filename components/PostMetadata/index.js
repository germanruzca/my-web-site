import { IconCalendar, IconComment, IconClock } from "../icons";
import { formatDate } from "../../lib/format_date";
import { Title, Icons} from './styled'

export const Component = ({ metadata }) => {
  return (
    <div>
      <Title>
        <h2>{metadata.title}</h2>
      </Title>
      <Icons>
        <div>
          <IconCalendar/>
          {formatDate(metadata.date)}
        </div>
        <div>
          <IconClock/>
          {Math.round(metadata.readingTime.minutes)} minutos de lectura
        </div>
      </Icons>
    </div>
  );
}

export { Component as PostMetadata};
export default Component;