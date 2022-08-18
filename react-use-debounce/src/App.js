import './App.css';
import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import useDebounce from './hooks/useDebounce';

function App() {
  const [search, setSearch] = useState('');
  const [tempData, setTempData] = useState([]);
  const { data, isLoading, isError } = useFetch('https://my-json-server.typicode.com/ignaways/fake-api-anime/data');
  
  const searchHandler = e => setSearch(e.target.value);

  // use Debounce to prevent unnecessary API calls
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    if (debouncedSearch) {
      const results = data.filter(item => {
        return item.title.toLowerCase().includes(debouncedSearch.toLowerCase());
      });
      setTempData(results);
    } else {
      setTempData(data);
    }
  }, [debouncedSearch, data]);

  return (
    <div className="container__main">
      <input
        className='content__search'
        type="text" 
        placeholder={'search here...'}
        onChange={searchHandler}
      />

      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {
        data.length > 0 &&
        <div className='content__text'>
          {
            tempData.length <= 0 ? <div>opps.. title doesn't exist</div> :
              tempData.map((e, i) => {
                return <div key={i}>{e.title}</div>
              })
          }
        </div>
      }
    </div>
  );
}

export default App;
