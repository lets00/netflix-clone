import React, { useEffect, useState } from 'react';
import tmdb from './tmdb'
import MovieRow from './components/MovieRow';
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeautredData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await tmdb.getHomeList()
      setMovieList(list)
      const originals = list.filter(i => i.slug === 'originals')
      const randomChosen = Math.floor(Math.random() * originals[0].items.results.length)
      const chosen = originals[0].items.results[randomChosen]
      const chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv')
      setFeautredData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />
      <section>
        {featuredData &&
          <FeaturedMovie item={featuredData} />
        }
      </section>
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
