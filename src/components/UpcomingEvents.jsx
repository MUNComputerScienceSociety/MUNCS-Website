import { EVENTS } from "../data/events";
import Event from "../components/Event";

const eventsWithDatesInTheFuture = EVENTS.map((event) => ({
  ...event,
  dates: event.dates.filter(
    (date) =>
      new Date(date.time) >= new Date().setDate(new Date().getDate() - 1)
  ),
}))
  .filter((event) => event.dates.length > 0)
  .reverse();

export const UpcomingEvents = () => (
  <>
    {eventsWithDatesInTheFuture.length === 0 && (
      <p className="italic text-center">No upcoming events</p>
    )}
    {eventsWithDatesInTheFuture.map((event) => (
      <Event key={event.link} event={event} />
    ))}
  </>
);
