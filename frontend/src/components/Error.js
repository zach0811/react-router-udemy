import MainNavigation from "./MainNavigation";
import { PageContent } from "./PageContent";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error Occured";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data;
  }

  if (error.status === 404) {
    title = "Page Not Found";
    message = "The page you are looking for does not exist!";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <h1>{message}</h1>
      </PageContent>
    </>
  );
};
