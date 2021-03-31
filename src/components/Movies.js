import Movie from './Movie'

const Movies = ({ movies, onClick, onAdd }) => {
    return (
        <div className="popular-movies">
            <div className="row">
                {movies.map((movie) => 
                (<Movie key={movie.id} movie={movie} onClick={onClick} onAdd={onAdd}/>))}
            </div>
        </div>
    )
}

export default Movies
