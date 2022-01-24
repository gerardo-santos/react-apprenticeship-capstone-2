import { render, screen } from '@testing-library/react';
import PictureInformation from '../components/PictureInformation';

describe('PictureInformation', () => {
  test('renders the PictureInformation component', () => {
    const error = null;
    const pictureData = {
      media_type: 'image',
      title: 'Moon picture',
      explanation: 'Amazing picture from the moon.',
      url: 'https://apod.nasa.gov/apod/image/2201/RigelWitchHead_Mtanous_960.jpg',
      date: '2022-01-01',
    };
    render(<PictureInformation pictureData={pictureData} error={error} />);

    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Moon picture');

    const explanation = screen.getByTitle('explanation');
    expect(explanation).toBeInTheDocument();
    expect(explanation.textContent).toBe('Amazing picture from the moon.');

    const date = screen.getByTitle('pic-date');
    expect(date).toBeInTheDocument();
    expect(date.textContent).toBe('2022-01-01');
  });
});
