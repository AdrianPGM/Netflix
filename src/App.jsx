import React, { useEffect, useState } from "react";
import Tmdb from './Tmdb'
import MovieRow from "./componets/MovieComponet/MovieRow";
import FeaturedMovie from './componets/FeaturedMovied/FeaturedMovie'
import Header from "./componets/Header/Header";
import './App.css'


export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrolllListener = () => {
      if (window.scrollY > 200) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrolllListener)

    return () => {
      window.removeEventListener('scroll', scrolllListener)
    }
  }, [])



  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <p>Feito Por <a href="https://github.com/AdrianPGM" target="_blanck">Adrian Matheus</a></p>
        <p>Direitos de Imagem para Neflix</p>
        <p>Dados pegos pelo site <a href="https://www.themoviedb.org/" target="_blanck">Themoviedb.org</a></p>

      </footer>

      {movieList.length <= 0 && 
        <div className="loading">
            <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_960,c_limit/Netflix_LoadTime.gif" alt="" />
        </div>
      }
    </div>
  )
}

