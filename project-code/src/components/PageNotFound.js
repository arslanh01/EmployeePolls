import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <Link to="/">Go back to dashboard</Link>
      <div className="center">
        <h3>
          Seems like the page you're looking for does not exist or has been
          moved
        </h3>
      </div>
    </div>
  );
};

export default PageNotFound;
