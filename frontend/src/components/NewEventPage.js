import { EventForm } from "./EventForm";
import { request, json, redirect } from "react-router-dom";

export const NewEventPage = () => {
  return <EventForm method="post" />;
};
