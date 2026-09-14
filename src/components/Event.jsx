import { format } from "date-fns";

export const EventDate = ({ date }) => (
  <li className="event-date flex flex-col sm:flex-row sm:justify-between gap-x-4">
    {date.title}
    <span className="italic float-right opacity-50 dark:opacity-70">
      {format(date.time, "MMMM do, yyyy")}
    </span>
  </li>
);

export const EventDates = ({ dates }) => (
  <ul className="event-dates">
    {dates.map((date) => (
      <EventDate key={date.time} date={date} />
    ))}
  </ul>
);

const Event = ({ event }) => (
  <a href={event.link}>
    <div className="event-card border rounded-sm hover:bg-hover dark:hover:bg-hover-dark">
      <h2 className="font-semibold mb-1">{event.title}</h2>
      <EventDates dates={event.dates} />
    </div>
  </a>
);

export default Event;
