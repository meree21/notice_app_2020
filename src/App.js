import React from 'react';
import axios from "axios";
import Movie from './Movie';
import "./App.css";



class App extends React.Component {
  state = {
    movies: [],
    isLoding: true
  }
  // apl(yts)를 불러옴
  getMovies =  async () =>{
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); // await : axios가  끝날떄가지 기다려줌
    this.setState({movies, isLoding: false}) //  movies : setDtate, axios(es6)
  }
  // movies 호출
  componentDidMount() {
    this.getMovies();
  }
  render(){
    const { isLoding, movies } = this.state;
    return (
      <section className="container">
        {isLoding ? (
          <div className="loader">
            <span className="loader_text"> Loading....</span>
          </div>
        ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                  poster={movie.medium_cover_image}
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;
