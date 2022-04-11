import { IconCalendar, IconComment, IconClock } from "./icons";
import { formatDate } from "../lib/format_date";

export const PostMetadata = ({ metadata }) => {
  return (
    <div>
      <div>
        <h2>{metadata.title}</h2>
      </div>
      <div>
        <IconCalendar/>
        {formatDate(metadata.date)}
      </div>
      <div>
        <IconClock/>
        {Math.round(metadata.readingTime.minutes)} minutos de lectura
      </div>
    </div>
  );
}