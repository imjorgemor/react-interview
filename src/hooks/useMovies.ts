import { useRef, useState, useMemo, useCallback } from 'react';
import { searchMovies } from '../repository/searchMovies';


export const useMovies = ({ search, sort }: any) => {
    const [movies, setMovies] = useState<any>([]);
    const previousSearch = useRef(search);

    //usecallback memoices functions using underlying use memo
    //usememo memoices the output of the function

    const getMovies = useCallback(async ({search}:any) => {
            if (search === previousSearch.current) return;

            try {
                //set loading a true
                //set error a null
                previousSearch.current = search;
                const newMovies = await searchMovies({ search });
                setMovies(newMovies);
            } catch (error) {
                //set error msg
            } finally {
                //set loading false
            }
        }, [search]);

    const sortedMovies = useMemo(() => {
        //memoize computations and avoid re-renders specially with inputs and long lists
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies;
    }, [sort, movies]);

    return { movies: sortedMovies, getMovies };
};