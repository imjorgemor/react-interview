import { useState } from 'react';

const useSearch = () => {
    const [search, setSearch] = useState('');
    return { search, setSearch };
};

export default useSearch;