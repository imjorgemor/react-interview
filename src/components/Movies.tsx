
export const ListOfMovies = ({ movies }: { movies: any }) => {
    return (
        <ul>
            {
                movies.map((movie: any) => (
                    <li key={movie.title + movie.year}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    );
};

export const NoMoviesResults = () => {
    return (
        <p>No se han encontrado peliculas para esta búsqueda</p>
    );
};

export const Movies = ({movies}:{movies:any}) => {
    const hasMovies = movies?.length > 0;

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    );
};