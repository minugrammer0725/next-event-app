import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const handleSearch = (year, month) => {
    // navigate to the year/month page.
    const newPath = `/events/${year}/${month}`;
    router.push(newPath);
  };

  return (
    <>
      <EventSearch handleSearch={handleSearch} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
