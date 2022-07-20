import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <Link to="/">Go back to dashboard</Link>
      <div className="center">
        <img
          src="data:image/jpeg;base64,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"
          alt="notFound"
        />
        <h3 data-testid="message">
          Seems like the page you're looking for does not exist or has been
          moved
        </h3>
      </div>
    </div>
  );
};

export default PageNotFound;
