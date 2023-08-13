import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.error?.message || "Not found";
  }

  return (
    <div
      className="errorPage"
      style={{
        paddingTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>An unexpected error has occured.</h1>
      <p>
        <i>Error: {errorMessage}</i>
      </p>
      <br />
      <a href="/">Go to main page →</a>
    </div>
  );
};
