// import {Link} from "react-router-dom";

// const EVENTS = [
//     {
//         id: 'e1',
//         title: "Event 1",
//         description: "This is event 1"
//     },
//     {
//         id: 'e2',
//         title: "Event 2",
//         description: "This is event 2"
//     },
//     {
//         id: 'e3',
//         title: "Event 3",
//         description: "This is event 3"
//     }
// ];

// export const EventsPage = () => {
//     return <div>
//         <h1>Events Page</h1>
//         <ul>
//             {EVENTS.map(event => (
//                 <li key={event.id}>
//                     <Link to={event.id}>{event.title}</Link>
//                 </li>
//             ))}
//         </ul>
//     </div>;
// }

import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";

export const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return json({ message: "Failed to fetch events", status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
