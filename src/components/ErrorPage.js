const ErrorPage = ({ errorMessage }) => {
  return (
    <div className="error_styling">
      Oops something went wrong: {errorMessage}!
    </div>
  );
};

export default ErrorPage;
