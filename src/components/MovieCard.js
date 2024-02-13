import React, { useState } from "react";

const MovieCard = (props) =>{
    const [isFlip, setIsFlip] = useState(false);
    const [isChanged,setIsChanged] = useState(false);
    const movie = props.movie

    const handleFLip = () => {
        setIsFlip(!isFlip)
    }

    const handleDoubleClick = () => {
        setIsChanged(!isChanged)
      }

    return (
        <><p onClick={handleFLip} className={isFlip ? "moviePara" : "movieParagraph"} key={movie.Title}>
           
            <img onDoubleClick={handleDoubleClick}  alt="hhh" src={movie.Poster} />
            <br />
            <b>{movie.Title}</b> <br />
            Ratings: {movie.imdbRating}/10 <br />
            Language: {movie.Language} <br />
            Director: {movie.Director} <br />
            Votes: {movie.imdbVotes} <br />
            
        </p>
        <p onClick={handleFLip} className={isFlip ? "movieParagraph" : "moviePara"}>
        <img onDoubleClick={handleDoubleClick} alt="hhh" src={movie.Poster} /><br/>
        <b>{movie.Title}</b> <br />
        Plot: {movie.Plot} <br />
            </p>
            <div>
            {/* <img className="imageClick" onDoubleClick={handleDoubleClick}  alt="hhh" src={movie.Poster} /> */}
            </div>
            </>

    )
}
export default MovieCard;