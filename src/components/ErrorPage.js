import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPS! Somethin went wrong!!</h1>
      <h1>{err?.status}</h1>
      <p>{err.statusText}</p>
    </div>
  );
};

export default ErrorPage;
