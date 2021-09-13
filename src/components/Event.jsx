import { format } from "date-fns";

export const EventDate = ({ date }) => (
  <li>
    {date.title}
    <span class="italic float-right opacity-50 dark:opacity-70">
      {format(new Date(date.time), "MMMM do, yyyy")}
    </span>
  </li>
);

export const EventDates = ({ dates }) =>
  dates.map((date) => <EventDate date={date} />);

const Event = ({ event }) => (
  <a href={event.link}>
    <div class="border px-3 py-2 rounded-sm">
      <h2 class="font-semibold">{event.title}</h2>
      <ul class="list-disc pl-5">
        <EventDates dates={event.dates} />
      </ul>
    </div>
  </a>
);

export default Event;
