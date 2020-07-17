import React from 'react';
import ProTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres}){
    return <div className="movie"> //영화 이미지,제목,장르등 보여짐
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genrs">
                {genres.map((genre, index) =>(
                    <li key={index} className="movie_geners">{genre}</li>
                    ))}
            </ul> 
            <p className="movie_summary">{summary.slice(0, 180)}...</p>
        </div>
    </div>
}
// App.js에 있는 영화정보의 props를 가져옵니다.
Movie.ProTypes = {
    id: ProTypes.number.isRequired,
    year: ProTypes.number.isRequired,
    title: ProTypes.string.isRequired,
    summary: ProTypes.string.isRequired,
    poster : ProTypes.string.isRequired,
    genres: ProTypes.arrayOf(ProTypes.string).isRequired
}

export default Movie;
