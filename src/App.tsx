import { useCallback, useState } from 'react';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import useSearch from './hooks/useSearch';
import debounce from 'just-debounce-it';


const App = () => {
    const [sort, setSort] = useState(false);
    const {search, setSearch} = useSearch();
    const {movies, getMovies } = useMovies({search, sort});

    const debouncedGetMovies= useCallback(debounce((search:any)=> {
        getMovies({search});

    }, 250),[]);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        getMovies({search});
    };

    const handleChange = (event: any) => {
        const newSearch = event.target.value;
        setSearch(event.target.value);
        debouncedGetMovies(newSearch);
    };

    const handleSort = () => {
        setSort(!sort);
    };


    return (
        <div>
            <header>
                <h1>Film search</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        name='query'
                        type="text"
                        placeholder="American psycho, American pie, The Matrix..."
                        value={search}
                    />
                    <input type="checkbox" onChange={handleSort} checked={sort} />
                    {/* <button type="submit">Search</button> */}
                </form>
            </header>

            <main>
                <Movies movies={movies} />
            </main>
        </div>
    );
};

export default App;