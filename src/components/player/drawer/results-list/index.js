import React, { useRef, useState, useEffect, useCallback } from 'react';

import { Input } from '@chakra-ui/react';

import dataJSON from '../../../../data';

import { debounce } from 'lodash';

import './styles.css';

const ResultsList = () => {
    const listRef = useRef();

    const dataJSONPlayers = dataJSON.PlayerData;

    const [page, setPage] = useState(0);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [results, setResults] = useState([]);

    const getResults = (currentResults, searchParam, pageParam) => {
        setIsLoading(true);

        setTimeout(() => {
            let dataAux = [...dataJSONPlayers].filter((d) => {
                let targetName = searchParam.toLowerCase();
                let currentName = `${d.Forename.toLowerCase()} ${d.Surname.toLowerCase()}`;
    
                return currentName.includes(targetName);
            });
            
            dataAux = dataAux.slice(pageParam * 20, (pageParam * 20) + 20);

            setIsLoading(false);
            setResults([...currentResults, ...dataAux]);
        }, 1000);
    }

    const getResultsDebounce = useCallback(debounce(getResults, 500), []);

    useEffect(() => getResultsDebounce(results, search, page), [page]);

    useEffect(() => getResultsDebounce([], search, page), [search]);

    const onScroll = () => {
        if (listRef.current) {
            const { scrollTop, clientHeight, scrollHeight } = listRef.current;

            if (scrollTop + clientHeight === scrollHeight) setPage(page + 1);
        }
    }

    return (
        <>
            <h6 className='results-found-text'>{`Resultados Encontrados: (${results.length})`}</h6>

            <Input placeholder='Buscar por nome...' value={search} onChange={(event) => setSearch(event.target.value)} />

            <div className='results-list' ref={listRef} onScroll={onScroll}>
                {results.length ?
                    results.map((result) => (
                        <div className='row-player' key={`result-${result.ID}`}>
                            <img src={result.ImageURL} className='image-player'/>
                            <h6 className='name-player'>{`${result.Forename} ${result.Surname}`}</h6>
                        </div>
                    ))
                : <span>Sem resultados</span>}
            </div>

            {isLoading ? <span className='loading'>Carregando...</span> : []}
        </>
    )
}

export default ResultsList;