import { useState, useEffect } from 'react';
import { searchData } from '../helpers/fetchData';
import '../App.css';
const Pirates = ({ search }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    searchData(search)
      .then(res => { setData(res) })
  }, [search]);

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <p className='pirates__text'>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Pirates;