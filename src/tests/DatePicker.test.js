import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from '../components/DatePicker';

describe('Date Picker', () => {
  test('renders the DatePicker component', () => {
    let date = '2022-03-01';
    const debounceOnChange = (value) => {
      date = value;
    };
    render(<DatePicker date={date} debounceOnChange={debounceOnChange} />);
    expect(screen.getByText('Please select a date')).toBeInTheDocument();
    const dateInput = screen.getByTitle('date');
    expect(dateInput).toBeInTheDocument();
    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });
    expect(date).toBe('2022-01-01');
  });
});
