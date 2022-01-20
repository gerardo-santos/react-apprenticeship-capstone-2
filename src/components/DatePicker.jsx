import { useState } from 'react';

const DatePicker = () => {
  const [date, setDate] = useState('');

  const handleChange = (e) => {
    setDate(() => e.target.value);
  };

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
        onChange={handleChange}
      />
    </div>
  );
};

export default DatePicker;
