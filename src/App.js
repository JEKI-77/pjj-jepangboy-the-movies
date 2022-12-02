
import './App.css';
import {getMovieList,searchMovie} from "./api"
import { useEffect, useState } from 'react';
import logo from "./image/PJJ.png"

const App = () => {

  const [popularMovies, setPopularMovies]= useState([])

useEffect(() => {

  getMovieList().then((result) => {
    setPopularMovies(result)
  })
},[])

const PopularMoviesList = () => {
  return popularMovies.map((movie,i) => {
    return(

      <div className="movie-wrapper" key = {1}>
          <div className="movie-title">{movie.title}</div>
          <image src="/public/IMG_4558.jpg"/>
           <img className='movie-image' 
           src= {`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}alt="" />
           
            <div className="movie-date">Release :{movie.release_date}</div>
            <div className="movie-rate">Rate : {movie.vote_average} </div>
          </div>
    )
  })
}
  
  const search = async(q) => {
    if (q.length > 3){
    const query = await searchMovie(q)
    setPopularMovies(query.results)
    }
  }

  console.log({popularMovies: popularMovies})
  return (
    <div className="App">
      <header className="App-header">
       <div>
       <img src={logo} className='app-logo' alt='me'/>
       </div>
        <h1 >The Movies </h1>
        <input placeholder="pengen cari film apa guyss..." className='movie-search'
        onChange = {({target}) => search (target.value)}
        />
        <div className="movie-container">
  
        <PopularMoviesList/>
   
        </div>
      </header>
    </div>
  );
}

export default App;
