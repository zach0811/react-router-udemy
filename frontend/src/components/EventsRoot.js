import EventsNavigation from "./EventsNavigation"
import { Outlet } from "react-router-dom"

export const EventsRoot = () => {
    return (
        <>
        <EventsNavigation />
        <Outlet />
        </>
    )
}