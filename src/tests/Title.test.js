import { render, screen } from '@testing-library/react';
import Title from '../components/Title';

describe('Title', () => {
  test('renders the Title component', () => {
    render(<Title />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Picture of the Day')).toBeInTheDocument();
  });
});
