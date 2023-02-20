export const API_KEY = '8c6b722e';

export const searchMovies = async ({ search }: any) => {
    if (search === '') return null;

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
        const json = await response.json();
        const movies = json.Search;

        return movies?.map((movie: any) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }));
    } catch (error) {
        console.log("ha habido un error", error);
    }

};

