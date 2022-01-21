import PropTypes from 'prop-types';

const DatePicker = ({ date, updateDate, updateSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updateSearch(() => date);
  };
  return (
    <form className="date-picker-container" onSubmit={handleSubmit}>
      <label htmlFor="date-picker" className="date-picker-label">
        Please select a date
      </label>
      <div>
        <input
          type="date"
          id="date-picker"
          name="date-picker"
          value={date}
          onChange={(e) => updateDate(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Show
        </button>
      </div>
    </form>
  );
};

DatePicker.propTypes = {
  date: PropTypes.string,
  updateDate: PropTypes.func,
  updateSearch: PropTypes.func,
};

export default DatePicker;
