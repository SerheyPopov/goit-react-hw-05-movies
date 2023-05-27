import { useEffect, useState } from 'react';

import { GetMovies } from '../components/Api/Api';
import CardList from '../components/CardList/CardList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    try {
      GetMovies().then(response => {
        setTrendMovies(response.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <CardList searchValue={trendMovies} />
    </div>
  );
};
export default Home;
