import { React, useState, useEffect } from 'react'
import supabase from '../supabase/configSupabase';

function Subscribe() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('scented-candles') // replace with your actual table name
        .select('*');

      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        setData(data);
        console.log(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Supabase Table Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.fragrance} - ${item.benefits}
          </li>
        ))}
      </ul>
    </div>
  );
}



export default Subscribe