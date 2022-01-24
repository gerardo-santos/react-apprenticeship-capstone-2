import { render, screen } from '@testing-library/react';
import ErrorAlert from '../components/ErrorAlert';

describe('ErrorAlert', () => {
  test('renders the ErrorAlert component', () => {
    let error = { msg: 'There was an error.' };
    render(<ErrorAlert error={error} />);
    expect(screen.getByTitle('error-msg')).toBeInTheDocument();
  });
});
