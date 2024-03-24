import { EventForm } from "./EventForm";
import { useRouteLoaderData } from "react-router-dom";

export const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventForm method="patch" event={data.event} />;
};
