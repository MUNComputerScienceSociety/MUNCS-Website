import { format } from "date-fns";

export const EventDate = ({ date }) => (
  <li>
    {date.title}
    <span className="italic float-right opacity-50 dark:opacity-70">
      {format(date.time, "MMMM do, yyyy")}
    </span>
  </li>
);

export const EventDates = ({ dates }) => (
  <ul className="list-disc pl-5">
    {dates.map((date) => (
      <EventDate key={date.time} date={date} />
    ))}
  </ul>
);

const Event = ({ event }) => (
  <a href={event.link}>
    <div className="border px-3 py-2 rounded-sm mb-2">
      <h2 className="font-semibold">{event.title}</h2>
      <EventDates dates={event.dates} />
    </div>
  </a>
);

export default Event;
