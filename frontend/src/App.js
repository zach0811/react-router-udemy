import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { EventsPage, loader as eventsLoader } from "./components/EventsPage";
import {
  EventDetailPage,
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./components/EventDetailPage";
import { NewEventPage } from "./components/NewEventPage";
import { EditEventPage } from "./components/EditEventPage";
import { RootLayout } from "./components/Root";
import { EventsRoot } from "./components/EventsRoot";
import { ErrorPage } from "./components/Error";
import { action as manipulateEventAction } from "./components/EventForm";
import {
  NewsletterPage,
  action as newsletterAction,
} from "./components/Newsletter";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <HomePage /> },
//       {
//         path: "events",
//         element: <EventsRoot />,
//         children: [
//           { index: true, element: <EventsPage />, loader: eventsLoader },
//           {
//             path: ":eventId",
//             id: "event-detail",
//             loader: eventDetailLoader,
//             children: [
//               {
//                 index: true,
//                 element: <EventDetailPage />,
//                 action: deleteEventAction,
//               },
//               {
//                 path: "edit",
//                 element: <EditEventPage />,
//                 action: manipulateEventAction,
//               },
//             ],
//           },

//           {
//             path: "new",
//             element: <NewEventPage />,
//             action: manipulateEventAction,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router}></RouterProvider>;
// }

// export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
