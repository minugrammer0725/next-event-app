import EventItem from "./event-item";

const EventList = (props) => {
  return (
    <ul>
      {props.items.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
