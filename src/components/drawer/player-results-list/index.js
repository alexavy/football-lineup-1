import React, { useRef, useState, useEffect, useCallback } from 'react';

import { Input, Spinner } from '@chakra-ui/react';

import RowPlayer from './row-player';

import dataJSON from '../../../data';

import { debounce } from 'lodash';

import './styles.css';

const PlayerResultsList = () => {
    const listRef = useRef();

    const dataJSONPlayers = dataJSON.PlayerData;

    const [page, setPage] = useState(0);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);

    const [results, setResults] = useState([]);

    const getResults = (currentResults, searchParam, pageParam) => {
        setIsLoading(true);

        setTimeout(() => {
            let dataAux = [...dataJSONPlayers].filter((d) => {
                let targetName = searchParam.toLowerCase();
                let currentName = `${d.Forename.toLowerCase()} ${d.Surname.toLowerCase()}`;
    
                return currentName.includes(targetName);
            });
            
            setTotalResults(dataAux.length);

            dataAux = dataAux.slice(pageParam * 20, (pageParam * 20) + 20);

            setIsLoading(false);
            setResults([...currentResults, ...dataAux]);
        }, 500);
    }

    const getResultsDebounce = useCallback(debounce(getResults, 500), []);

    useEffect(() => getResultsDebounce(results, search, page), [page]);

    useEffect(() => getResultsDebounce([], search, 0), [search]);

    const onScroll = () => {
        if (listRef.current) {
            const { scrollTop, clientHeight, scrollHeight } = listRef.current;

            if (scrollTop + clientHeight === scrollHeight) setPage(page + 1);
        }
    }

    if (totalResults === 0 && !isLoading) {
        return <div className='results-not-found-text'>Sem resultados.</div>;
    }

    return (
        <>
            <h6 className='results-found-text'>{`Resultados Encontrados: (${totalResults})`}</h6>
            
            <Input placeholder='Buscar por nome...' value={search} onChange={(event) => setSearch(event.target.value)} />

            {totalResults > 0
            ?
                <div className='results-list' ref={listRef} onScroll={onScroll}>
                    {results.map((currentPlayer) => (
                        <RowPlayer currentPlayer={currentPlayer} />
                    ))}
                </div>
            : []}

            {isLoading 
            ? 
                <div className='loading-container'>
                    <Spinner size='sm' me='15px' />
                    <span>Carregando...</span> 
                </div>
            : []}
        </>
    )
}

export default PlayerResultsList;