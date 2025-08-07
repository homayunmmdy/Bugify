import './Error.scss'
import { BiArrowBack, BiHome } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1>Uh oh! We’ve got a problem.</h1>
      <p>404</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <BiArrowBack width={20} />
          <span>Go Back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <BiHome width={20} />
          <span>Go home</span>
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
