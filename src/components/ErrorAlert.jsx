import PropTypes from 'prop-types';

const ErrorAlert = ({ error }) => {
  return (
    <div className="error-container">
      <span title="error-msg">
        {error.msg ? error.msg : 'An unexpected error occurred'} &#128546;
        &#128546; &#128546;
      </span>
    </div>
  );
};

ErrorAlert.propTypes = {
  error: PropTypes.object,
};

export default ErrorAlert;
