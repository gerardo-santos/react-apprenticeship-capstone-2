import PropTypes from 'prop-types';

const DatePicker = ({ date, debounceOnChange }) => {
  return (
    <form className="date-picker-container">
      <label htmlFor="date-picker" className="date-picker-label">
        Please select a date
      </label>
      <div>
        <input
          type="date"
          id="date-picker"
          name="date-picker"
          value={date}
          onChange={(e) => debounceOnChange(e.target.value)}
        />
      </div>
    </form>
  );
};

DatePicker.propTypes = {
  date: PropTypes.string,
  debounceOnChange: PropTypes.func,
};

export default DatePicker;
