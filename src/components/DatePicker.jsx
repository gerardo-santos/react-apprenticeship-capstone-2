import PropTypes from 'prop-types';

const DatePicker = ({ date, updateDate }) => {
  return (
    <div className="date-picker-container">
      <label htmlFor="date-picker" className="date-picker-label">
        Please select a date
      </label>
      <input
        type="date"
        id="date-picker"
        name="date-picker"
        value={date}
        onChange={(e) => updateDate(e.target.value)}
      />
    </div>
  );
};

DatePicker.propTypes = {
  date: PropTypes.string,
  updateDate: PropTypes.func,
};

export default DatePicker;
