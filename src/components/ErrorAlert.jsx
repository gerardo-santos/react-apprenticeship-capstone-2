import PropTypes from 'prop-types';

const ErrorAlert = ({ error }) => {
  return (
    <div className="error-container">
      <span>
        The following error occurred: {error} &#128546; &#128546; &#128546;
      </span>
    </div>
  );
};

ErrorAlert.propTypes = {
  error: PropTypes.string,
};

export default ErrorAlert;
