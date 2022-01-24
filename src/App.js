import Title from './components/Title';
import DatePicker from './components/DatePicker';
import Spinner from './components/Spinner';
import PictureInformation from './components/PictureInformation';
import useFetch from './hooks/useFetch';
import { apodUrl } from './utils/constants';
import { useState, useRef } from 'react';
import { debounce } from './utils/functions';

const App = () => {
  const [date, setDate] = useState(() => {
    const dateObject = new Date();
    const isoDate = dateObject.toISOString().split('T')[0];
    return isoDate;
  });
  const [search, setSearch] = useState('');

  const { loading, error, data } = useFetch(
    // eslint-disable-next-line no-undef
    `${apodUrl}?date=${date}&api_key=${process.env.REACT_APP_API_KEY}`,
    {},
    search,
    null
  );

  const debouncedFilterHandler = useRef(debounce(updateSearch, 500)).current;

  function updateSearch(newDate) {
    setSearch(() => newDate);
  }

  const debounceOnChange = (newDate) => {
    setDate(() => newDate);
    debouncedFilterHandler(newDate);
  };

  return (
    <>
      <Title />
      <DatePicker date={date} debounceOnChange={debounceOnChange} />
      {loading ? (
        <Spinner />
      ) : (
        <PictureInformation pictureData={data} error={error} />
      )}
    </>
  );
};

export default App;
